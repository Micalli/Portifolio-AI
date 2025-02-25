import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { Badges } from '../../components/Badges';
import { iconsHabilities } from '../../../app/config/constants';
import Me from "../../../assets/Me.svg";
import { Button } from '../../components/Buttons';
import { useNavigate } from 'react-router-dom';
import resume from "../../../../static/Micalli-CV.pdf"


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
      {windowWidth >= 768 && (
        <motion.div
          className="fixed top-0 left-0 w-[300px] h-[300px] bg-green-400 rounded-full  opacity-10  blur-3xl  pointer-events-none"
          animate={{ x: position.x - 150, y: position.y - 150 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
        />
      )}{" "}
      <div className="h-screen flex justify-center items-center gap-10 bg-[#19191b]">
        <AnimatePresence>
          <motion.aside
            className="flex flex-col  w-full h-full p-10 justify-center md:items-start items-center bg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,

              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <span className="text-[#56ecb5] font-thin md:font-extralight flex justify-center md:justify-start">
              Olá, meu nome é
            </span>
            <h1 className=" text-white font-bold  text-6xl md:text-7xl tracking-[-0.5px] flex ">
              Bruno Micalli.
            </h1>
            <p className="text-gray-400 text-base md:text-lg  flex text-center md:text-start ">
              Sou desenvolvedor Node e Web, criando soluções e sistemas
              escaláveis e robustos, proporcionando uma experiência digital
              excepcional.
            </p>
            <span className="flex gap-2 m-2 flex-wrap justify-center md:justify-start ">
              {iconsHabilities.map(({ title, icon: Icon }) => (
                <Badges
                  key={title}
                  title={title}
                  icon={<Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />}
                />
              ))}
            </span>
            <div className="w-full  flex justify-center items-center gap-10">
              <a href={resume} download>
                <Button className="mt-10  rounded-none w-40 font-medium  bg-[#1BAC77] text-white  hover:enabled:bg-[#137853] hover:scale-95 ">
                  Baixar CV
                </Button>
              </a>

              <Button
                className="mt-10  rounded-none w-40 font-medium border-2 border-[#1BAC77] hover:border-[#137853] active:border-[#34dfa0] bg-transparent text-white hover:enabled:bg-[#137853] hover:scale-95 "
                onClick={() => navigate("/contact")}
              >
                Entre em contato
              </Button>
            </div>
          </motion.aside>
          <motion.aside
            className=" items-center justify-center w-full h-full md:flex hidden"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <img src={Me} alt="Eu" />
          </motion.aside>
        </AnimatePresence>
      </div>
    </>
  );
}


