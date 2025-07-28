import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { Badges } from "../../components/Badges";
import { iconsHabilities } from "../../../app/config/constants";
import Me from "../../../assets/Me.svg";
import { Button } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
import resume from "../../../../static/Micalli-CV.pdf";

export function Portifolio() {
  const windowWidth = useWindowWidth();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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
            className="fixed top-0 right-0 w-[300px] h-[300px] bg-gradient-to-l from-accent/15 to-warning/15 rounded-full opacity-20 blur-3xl pointer-events-none"
            animate={{ x: position.x - 150, y: position.y - 150 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
          />
        </>
      )}

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-card/50 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&apos;)] opacity-30' />

        <div className="relative z-10 min-h-screen flex justify-center items-center gap-10 px-4 pt-20 md:pt-0">
          <AnimatePresence>
            <motion.aside
              className="flex flex-col w-full h-full p-6 md:p-10 justify-center md:items-start items-center"
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
            >
              {/* Greeting */}
              <motion.span
                className="text-accent font-light text-lg md:text-xl mb-2 flex justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                👋 Olá, meu nome é
              </motion.span>

              {/* Main Title */}
              <motion.h1
                className="text-primary font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight flex flex-col md:flex-row gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Bruno
                </span>
                <span className="text-accent">Micalli</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-secondary text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mt-4 md:mt-6 text-center md:text-start leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Desenvolvedor <span className="text-accent">Node</span> e{" "}
                <span className="text-accent">Web</span>, criando soluções e
                sistemas escaláveis e robustos, proporcionando uma experiência
                digital excepcional.
              </motion.p>

              {/* Skills Badges */}
              <motion.div
                className="flex gap-2 md:gap-3 mt-6 md:mt-8 flex-wrap justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                {iconsHabilities.map(({ title, icon: Icon }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  >
                    <Badges
                      title={title}
                      icon={
                        <Icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-accent" />
                      }
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className=" flex flex-col sm:flex-row justify-center items-center mt-8 md:mt-12 gap-3 md:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <motion.a
                  href={resume}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="rounded-xl w-full sm:w-48 h-12 md:h-14 font-semibold bg-gradient-to-r from-accent to-accentHover text-background hover:from-accentHover hover:to-accent shadow-lg shadow-accent/25 transition-all duration-300">
                    📄 Baixar CV
                  </Button>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    className="rounded-xl items-center  sm:w-48 h-12 md:h-14 font-semibold border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-background shadow-lg shadow-accent/10 transition-all duration-300"
                    onClick={() => navigate("/contact")}
                  >
                    💬 Entre em contato
                  </Button>
                </motion.div>
              </motion.div>

             
            </motion.aside>

            {/* Profile Image */}
            <motion.aside
              className="items-center justify-center w-full h-full md:flex hidden"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-info/20 rounded-full blur-3xl" />
                <img
                  src={Me}
                  alt="Bruno Micalli"
                  className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-accent/20 shadow-2xl"
                />
              </motion.div>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
