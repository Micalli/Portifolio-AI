import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Input";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { motion } from "framer-motion";
import { useContactController } from "./useContactController";
import { socialMidia } from '../../../app/config/constants';

export function Contact() {
  const {
    handleChangeName,
    handleChangeEmail,
    handleChangeMessage,
    message,
    name,
  } = useContactController();

  const windowWidth = useWindowWidth();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Here you would typically send the email
      window.open(`mailto:bruno.micalli@uol.com.br?body=Olá me chamo ${name}. ${message}&subject=Micalli Dev`, '_blank');
    }, 1000);
  };

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
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-30' />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent mb-4">
                Vamos Conversar
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                Estou sempre aberto a novas oportunidades e colaborações. Entre
                em contato e vamos criar algo incrível juntos!
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label className="block text-primary font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    onChange={(e) => handleChangeName(e.target.value)}
                    required
                    type="text"
                    name="name"
                    placeholder="Digite seu nome completo"
                    className="w-full bg-background/50 border border-border/30 rounded-xl px-4 py-3 text-primary placeholder:text-secondary focus:border-accent/50 focus:outline-none transition-all duration-300"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <label className="block text-primary font-medium mb-2">
                    E-mail
                  </label>
                  <Input
                    onChange={(e) => handleChangeEmail(e.target.value)}
                    required
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full bg-background/50 border border-border/30 rounded-xl px-4 py-3 text-primary placeholder:text-secondary focus:border-accent/50 focus:outline-none transition-all duration-300"
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <label className="block text-primary font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    onChange={(e) => handleChangeMessage(e.target.value)}
                    required
                    name="message"
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                    rows={5}
                    className="w-full bg-background/50 border border-border/30 rounded-xl px-4 py-3 text-primary placeholder:text-secondary focus:border-accent/50 focus:outline-none transition-all duration-300 resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 font-semibold bg-gradient-to-r from-accent to-accentHover text-background hover:from-accentHover hover:to-accent shadow-lg shadow-accent/25 transition-all duration-300 rounded-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">📧</span>
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>

              {/* Contact Info */}
              <motion.div
                className="mt-8 pt-8 border-t border-border/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-primary mb-4 text-center">
                  Outras formas de contato
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.a
                    href="mailto:bruno.micalli@uol.com.br"
                    className="flex items-center justify-center p-4 bg-background/30 rounded-xl border border-border/20 hover:border-accent/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl mr-3">📧</span>
                    <div className="text-left">
                      <div className="text-primary font-medium">Email</div>
                      <div className="text-secondary text-sm">
                        bruno.micalli@uol.com.br
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/5511969553410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-background/30 rounded-xl border border-border/20 hover:border-accent/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl mr-3">💬</span>
                    <div className="text-left">
                      <div className="text-primary font-medium">WhatsApp</div>
                      <div className="text-secondary text-sm">
                        +55 (11) 96955-3410
                      </div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-3">
              {socialMidia.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14  bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
