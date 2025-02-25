import { useEffect, useState } from "react";
import { Button } from "../../components/Buttons";
import { Input } from "../../components/Input";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { motion } from "framer-motion";
import { useContactController } from "./useContactController";

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
      )}
      <div className="flex h-screen  flex-col justify-center items-center  m-4 ">
        <div className=" flex flex-col max-w-[600px] container gap-8 bg-[#101828] p-8 md:p-12 rounded-2xl">
          <h1 className="text-white text-2xl mb-10 text-center">
            Entre em contato
          </h1>
          <Input
            onChange={(e) => handleChangeName(e.target.value)}
            required
            type="text"
            name="name"
            placeholder="Seu nome"
            className="flex-1 border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500   valid:!border-[#56ecb5] autocomplete-bg "
          />
          <Input
            onChange={(e) => handleChangeEmail(e.target.value)}
            required
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Seu e-mail"
            className="flex-1 border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500 valid:!border-[#56ecb5] autofill:!bg-amber-200   "
          />
          <Input
            onChange={(e) => handleChangeMessage(e.target.value)}
            autoComplete="off"
            required
            type="textarea"
            name="message"
            placeholder="Mensagem"
            className="flex-1 border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500 valid:!border-[#56ecb5] "
          />
          <a
            href={`mailto:bruno.micalli@uol.com.br?body=Olá me chamo ${name}. ${message}&subject=Micalli Dev`}
            target="_blank "
          >
            <Button className="font-medium text-white bg-[#1BAC77]  w-full hover:enabled:bg-[#137853]">
              Enviar
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
