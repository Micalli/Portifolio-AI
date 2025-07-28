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

      <div className=" flex-1 bg-gradient-to-br from-background via-background/95 to-card/50 relative ">
        {/* Grid Pattern Background */}

        <div className=" z-10  py-6 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent mb-4">
                Sobre Mim
              </h1>
            
            </motion.div>

              {/* About Card */}
              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="text-accent mr-3">👨‍💻</span>
                  Quem sou eu
                </h2>
                <div className="space-y-4 text-secondary leading-relaxed">
                  <p>
                    Sou um desenvolvedor back-end apaixonado por criar soluções
                    escaláveis e seguras. Minha especialidade está em NestJS,
                    JavaScript, Java, AWS e bancos de dados SQL/NoSQL, além de
                    práticas avançadas como TDD, SOLID, DDD e Design Patterns.
                    Tenho experiência no desenvolvimento de sistemas
                    financeiros, integração de APIs e otimização de aplicações
                    para alto desempenho.
                  </p>
                  <p>
                    Atualmente, estou focado no desenvolvimento de dois
                    projetos: 
                    <p>

                    🟢 FinCheck – Uma plataforma para gestão de
                    finanças pessoais, ajudando usuários a organizarem suas
                    receitas, despesas e obterem insights financeiros. 
                    </p>
                    <p>

                    🏢 SaaS para Gestão de Condomínios – Um sistema que facilita a
                    administração de condomínios, oferecendo recursos para
                    gestão financeira, comunicação interna e automação de
                    processos.(Em breve)
                    </p>
                  </p>
                  <p>
                    Formado em Análise e Desenvolvimento de Sistemas pela
                    Universidade Metodista de São Paulo, também participei de um
                    bootcamp na Generation, aprofundando meus conhecimentos em
                    Java, Angular e MySQL.
                  </p>
                </div>
              </motion.div>

           

         

            {/* Social Media */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Conecte-se Comigo
              </h3>
              <div className="flex justify-center gap-6">
                {socialMidia.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-card/50 backdrop-blur-sm rounded-xl border border-border/20 flex items-center justify-center text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300 shadow-lg"
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
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
