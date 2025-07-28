import { useEffect, useState } from 'react';
import { Project } from '../../components/Project';
import { Spinner } from '../../components/Spinner';
import { useProjectsController } from './useProjectsController';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const { projects, isFetching } = useProjectsController();
  const windowWidth = useWindowWidth();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Filter projects based on search and filter
  const filteredProjects = projects.filter((project: any) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.language?.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  // Get unique languages for filter
  const languages = [...new Set(projects.map((project: any) => project.language))].filter(Boolean) as string[];

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

      <div className="flex-1 bg-gradient-to-br from-background via-background/95 to-card/50 relative ">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.02&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 min-h-screen py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl py-2 md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent mb-4">
                Meus Projetos
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                Uma coleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                {/* Search Input */}
                <div className="relative w-full max-w-md">
                  <input
                    type="text"
                    placeholder="Buscar projetos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl px-4 py-3 text-primary placeholder:text-secondary focus:outline-none focus:border-accent/50 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary">
                    🔍
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2 flex-wrap justify-center">
                  <motion.button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      filter === 'all'
                        ? 'bg-accent text-background shadow-lg shadow-accent/25'
                        : 'bg-card/50 text-secondary hover:text-primary border border-border/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Todos
                  </motion.button>
                  
                  {languages.map((language: string) => (
                    <motion.button
                      key={language}
                      onClick={() => setFilter(language)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        filter === language
                          ? 'bg-accent text-background shadow-lg shadow-accent/25'
                          : 'bg-card/50 text-secondary hover:text-primary border border-border/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {language}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            {isFetching && (
              <motion.div 
                className="flex justify-center items-center h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Spinner classname="w-12 h-12" />
              </motion.div>
            )}

            {!isFetching && (
              <>
                {/* Results Count */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-secondary">
                    Mostrando <span className="text-accent font-semibold">{filteredProjects.length}</span> de{' '}
                    <span className="text-accent font-semibold">{projects.length}</span> projetos
                  </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <AnimatePresence>
                    {filteredProjects.map((project: any, index: number) => (
                      <motion.div
                        key={project.id || index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.9 }}
                        transition={{ 
                          delay: index * 0.1, 
                          duration: 0.5,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          y: -10,
                          transition: { duration: 0.2 }
                        }}
                        className="group"
                      >
                        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 h-full">
                          <Project
                            title={project.name}
                            description={project.description}
                            link={project.homepage ?? project.html_url}
                            stars={project.stargazers_count}
                            createdAt={project.created_at}
                          />
                          
                          {/* Project Language Badge */}
                          {project.language && (
                            <div className="mt-4 flex items-center justify-between">
                              <span className="text-xs text-secondary bg-border/30 px-2 py-1 rounded-full">
                                {project.language}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-secondary">⭐ {project.stargazers_count}</span>
                                <span className="text-xs text-secondary">🔀 {project.forks_count || 0}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-bold text-primary mb-2">Nenhum projeto encontrado</h3>
                    <p className="text-secondary">
                      Tente ajustar os filtros ou termos de busca
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}