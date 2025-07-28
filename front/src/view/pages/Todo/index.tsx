import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { ConfirmDeleteModal } from "../../components/ConfirmDeleteModal";
import { Spinner } from "../../components/Spinner";
import { Task } from "../../components/Task";
import { EditTaskModal } from "./modals/EditTaskModal";
import { NewTaskModal } from "./modals/NewTaskModal";
import { useTodoController } from "./useTodoController";
import { motion, AnimatePresence } from "framer-motion";
import { Fab } from "./components/Fab";

export function Todo() {
  const {
    isFetching,
    tasks,
    handleDeleteAccount,
    isLoadingDelete,
    taskUpdated,
    closeDeleteTaskModal,
    taskIdDeleted,
    isDeleteTaskModalOpen,
  } = useTodoController();

  const windowWidth = useWindowWidth();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Filter tasks
  const filteredTasks = tasks.filter((task: any) => {
    if (filter === 'pending') return !task.finished;
    if (filter === 'completed') return task.finished;
    return true;
  });

  const pendingCount = tasks.filter((task: any) => !task.finished).length;
  const completedCount = tasks.filter((task: any) => task.finished).length;

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

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-card/50 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.02&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 min-h-screen py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent mb-4">
                Minhas Tarefas
              </h1>
              <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                Organize suas atividades e mantenha o foco no que realmente importa
              </p>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{tasks.length}</div>
                  <div className="text-secondary text-sm">Total de Tarefas</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-warning">{pendingCount}</div>
                  <div className="text-secondary text-sm">Pendentes</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">{completedCount}</div>
                  <div className="text-secondary text-sm">Concluídas</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              className="flex justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {[
                { key: 'all', label: 'Todas', count: tasks.length },
                { key: 'pending', label: 'Pendentes', count: pendingCount },
                { key: 'completed', label: 'Concluídas', count: completedCount }
              ].map(({ key, label, count }) => (
                <motion.button
                  key={key}
                  onClick={() => setFilter(key as 'all' | 'pending' | 'completed')}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === key
                      ? 'bg-accent text-background shadow-lg shadow-accent/25'
                      : 'bg-card/50 text-secondary hover:text-primary border border-border/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label} ({count})
                </motion.button>
              ))}
            </motion.div>

            {/* Loading State */}
            {isFetching && (
              <motion.div 
                className="flex justify-center items-center h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Spinner classname="w-12 h-12" />
              </motion.div>
            )}

            {/* Tasks List */}
            {!isFetching && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <AnimatePresence>
                  {filteredTasks.map((task: any, index: number) => (
                    <motion.div
                      key={task.id}
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
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Task
                        description={task.description}
                        priority={task.priority}
                        finished={task.finished}
                        taskId={task.id}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Empty State */}
                {filteredTasks.length === 0 && (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {filter === 'all' ? 'Nenhuma tarefa criada' : 
                       filter === 'pending' ? 'Nenhuma tarefa pendente' : 
                       'Nenhuma tarefa concluída'}
                    </h3>
                    <p className="text-secondary">
                      {filter === 'all' ? 'Comece criando sua primeira tarefa!' : 
                       filter === 'pending' ? 'Todas as tarefas foram concluídas!' : 
                       'Complete algumas tarefas para ver aqui'}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Modals */}
            <NewTaskModal />
            <EditTaskModal updatedTaskId={taskUpdated} />
            
            {isDeleteTaskModalOpen && (
              <ConfirmDeleteModal
                isLoading={isLoadingDelete}
                onConfirm={() => handleDeleteAccount(taskIdDeleted)}
                title="Tem certeza que deseja excluir esta tarefa?"
                onClose={closeDeleteTaskModal}
              />
            )}

            {/* Floating Action Button */}
            <Fab />
          </div>
        </div>
      </div>
    </>
  );
}
