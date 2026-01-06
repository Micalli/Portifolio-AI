import { Message } from "../../components/Message";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Input";
import { useChatAiController } from "./useChatAiController";
import { TypingIndicator } from "../../components/TypingIndicator";
import { InitialScreenChat } from "../../components/InitialScreenChat";
import { Trash2, Bot, MessageSquare, SendHorizontal } from "lucide-react";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from '../../components/Spinner';

export function ChatAi() {
  const {
    register,
    handleSubmit,
    isPending,
    messages,
    messagesEndRef,
    handleClearMessages,
  } = useChatAiController();
  
  const windowWidth = useWindowWidth();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Effects */}
      {windowWidth >= 768 && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-info/20 rounded-full opacity-30 blur-3xl pointer-events-none"
            animate={{ x: position.x - 200, y: position.y - 200 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
          />
          <motion.div
            className="fixed top-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-warning/15 to-accent/15 rounded-full opacity-20 blur-3xl pointer-events-none"
            animate={{ x: position.x - 150, y: position.y - 150 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
          />
        </>
      )}

      <div className=" bg-gradient-to-br from-background via-background/95 to-card/50 relative ">
        {/* Grid Pattern Background */}
        <div />
        
        <div className="relative z-10 flex flex-col h-screen">
          {/* Header */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border-b border-border/20 px-6 py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-info rounded-full flex items-center justify-center">
                  <Bot className="text-background w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-primary">Bruno AI Assistant</h1>
                  <p className="text-secondary text-sm">Seu assistente pessoal de desenvolvimento</p>
                </div>
              </div>
              
              <motion.button
                onClick={handleClearMessages}
                className="p-2 flex justify-center items-center rounded-xl bg-background/30 border border-border/20 text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Limpar conversa"
              >
                <Trash2 className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Area */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              {messages.length === 0 && !isPending ? (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <InitialScreenChat />
                </motion.div>
              ) : (
                <motion.div
                  key="messages"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-y-auto px-6 py-4 h-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-accent/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-accent/40"
                >
                  <div className="max-w-4xl mx-auto space-y-6">
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ 
                            delay: index * 0.1, 
                            duration: 0.5,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          <Message
                            text={message.text}
                            sender={message.sender}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {isPending && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}
                    
                    <div ref={messagesEndRef} className="h-4" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border-t border-border/20 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto flex items-end gap-4"
            >
              <div className="flex-1 relative">
                <Input
                  autoComplete="off"
                  placeholder="Pergunte sobre minhas experiências, projetos, formação, LinkedIn e GitHub..."
                  {...register("message")}
                  disabled={isPending}
                  className="pr-12 py-4 rounded-2xl"
                />
                
                {/* Character count or typing indicator */}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary">
                  {isPending ? <Bot className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                size='icon'
                  type="submit"
                  disabled={isPending}
                  className=" h-14 rounded-2xl  transition-all duration-300 flex items-center justify-center "
                >
                  {isPending ? (
                    <Spinner />
                  ) : (
                    <SendHorizontal className="w-5 h-5 text-black" />
                  )}
                </Button>
              </motion.div>
            </form>
            
            {/* Quick Actions */}
            <motion.div
              className="max-w-4xl mx-auto mt-4 flex gap-2 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                "Conte sobre seus projetos",
                "Quais são suas skills?",
                "Como posso te contratar?",
                "Mostre seu GitHub"
              ].map((suggestion, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => {
                    const input = document.querySelector('input[name="message"]') as HTMLInputElement;
                    if (input) {
                      input.value = suggestion;
                      input.focus();
                    }
                  }}
                  className="px-3 cursor-pointer py-1.5 text-xs bg-background/30 border border-border/20 rounded-lg text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
