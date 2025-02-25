import { useEffect, useState } from "react";
import { socialMidia } from "../../../app/config/constants";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { motion } from "framer-motion";

export function About() {
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
      <div className="text-white h-screen  flex flex-col justify-between items-center mx-12 ">
        <h1 className="mt-10 mb-4  text-3xl sm:text-5xl font-thin ">Sobre mim</h1>
        <p className="max-w-[600px]  text-start  text-slate-400/80  font-extralight text-lg">
          Sou um desenvolvedor back-end apaixonado por criar soluções escaláveis
          e seguras. Minha especialidade está em NestJS, JavaScript, Java, AWS e
          bancos de dados SQL/NoSQL, além de práticas avançadas como TDD, SOLID,
          DDD e Design Patterns. Tenho experiência no desenvolvimento de
          sistemas financeiros, integração de APIs e otimização de aplicações
          para alto desempenho.
        </p>
        <p className="max-w-[600px]  text-start  text-slate-400/80  font-extralight my-6 text-lg">
          Atualmente, estou focado no desenvolvimento de dois projetos:
          <p>
            🟢 FinCheck – Uma plataforma para gestão de finanças pessoais,
            ajudando usuários a organizarem suas receitas, despesas e obterem
            insights financeiros.
          </p>
          <p>
            🏢 SaaS para Gestão de Condomínios – Um sistema que facilita a
            administração de condomínios, oferecendo recursos para gestão
            financeira, comunicação interna e automação de processos.(Em breve)
          </p>
        </p>

        <p className="max-w-[600px]  text-start  text-slate-400/80  font-extralight text-lg">
          Formado em Análise e Desenvolvimento de Sistemas pela Universidade
          Metodista de São Paulo, também participei de um bootcamp na
          Generation, aprofundando meus conhecimentos em Java, Angular e MySQL.
        </p>

        <div className="mt-6 gap-4 flex flex-row mb-4">
          {socialMidia.map(({ icon: Icon, href }) => (
            <a href={href} target="_blank">
              <Icon className="w-10 h-10 cursor-pointer text-white/30 hover:text-slate-300 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
