import { Message } from "../../components/Message";
import { Button } from "../../components/Buttons";
import { Send } from "../../components/Send";
import { Input } from "../../components/Input";
import { useChatAiController } from "./useChatAiController";
import { TypingIndicator } from "../../components/TypingIndicator";
import { InitialScreenChat } from "../../components/InitialScreenChat";
import { Clear } from "../../components/icons/Clear";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      {windowWidth >= 768 && (
        <motion.div
          className="fixed top-0 left-0 w-[300px] h-[300px] bg-green-400 rounded-full  opacity-10  blur-3xl  pointer-events-none overflow-"
          animate={{ x: position.x - 150, y: position.y - 150 }} 
          transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
        />
      )}
      <div className="flex flex-col h-screen w-full  mx-auto    overflow-hidden bg-[#19191b]  justify-between ">
        <div className=" text-white py-3 px-4 font-semibold flex items-center justify-between overflow-hidden ">
          <span className="ml-6 ">Assistente de Bruno</span>
          <button
            className="cursor-pointer"
            onClick={() => handleClearMessages()}
          >
            <Clear classname="w-12 h-12 hover:text-gray-300 transition  active:text-[#34D399]" />
          </button>
        </div>

        {isPending || (messages.length == 0 && <InitialScreenChat />)}
        {messages.length > 0 && (
          <div className="overflow-y-auto flex flex-col px-6 mb-20 h-full max-h-[calc(100vh-150px)]">
            {messages.map((message, index) => (
              <Message
                key={index}
                text={message.text}
                sender={message.sender}
              />
            ))}
            <div ref={messagesEndRef} className="h-1 "></div>

            {isPending && <TypingIndicator />}
          </div>
        )}

        <form
          className="p-4   flex items-center gap-2 fixed bottom-0 w-full overflow-hidden"
          onSubmit={handleSubmit}
        >
          <Input
            autoComplete="off"
            placeholder="Pergunte sobre minhas experiencias, projetos, formação, linkedin e github..."
            {...register("message")}
            disabled={isPending}
            className="flex-1 border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500  "
          />
          <Button type="submit" isLoading={isPending}>
            <Send className="w-6 h-6 text-black" />
          </Button>
        </form>
      </div>
    </>
  );
}
