import { useEffect, useState } from 'react';
import { Project } from '../../components/Project';
import { Spinner } from '../../components/Spinner';
import { useProjectsController } from './useProjectsController';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';
import { motion } from "framer-motion";


export  function Projects() {
    const {projects, isFetching}= useProjectsController()

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
      <div className="container mx-auto px-4 min-h-screen pt-16  ">
        <div className="text-white ">
          <h1 className="text-center text-5xl font-thin mb-6">Projetos</h1>
        </div>
        {isFetching && (
          <div className="flex justify-center items-center h-screen">
            <Spinner classname="w-10 h-10" />
          </div>
        )}
        {!isFetching && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 group/op ">
            {projects.map((project: any) => (
              <div className="transition-opacity duration-300 group-hover/op:opacity-50 hover:opacity-100">
                <Project
                  key={project.id}
                  title={project.name}
                  description={project.description}
                  link={project.homepage ?? project.html_url}
                  stars={project.stargazers_count}
                  createdAt={project.created_at}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}