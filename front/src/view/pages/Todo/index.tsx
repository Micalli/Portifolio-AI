import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { ConfirmDeleteModal } from "../../components/ConfirmDeleteModal";
import { Spinner } from "../../components/Spinner";
import { Task } from "../../components/Task";
import { EditTaskModal } from "./modals/EditTaskModal";
import { NewTaskModal } from "./modals/NewTaskModal";
import { useTodoController } from "./useTodoController";
import { motion } from "framer-motion";
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
      <NewTaskModal />
      <Fab />
      {isFetching && (
        <div className=" justify-center flex items-center h-full">
          <Spinner classname="w-10 h-10" />
        </div>
      )}
      {tasks.length > 0 && !isFetching && (
        <>
          <div className="h-full  w-full flex flex-col items-center mt-10 text-white">
            <h1 className="mb-10  text-5xl font-thin">Todo</h1>

            {tasks.map((task: any) => (
              <Task
                key={task.id}
                description={task.description}
                priority={task.priority}
                finished={task.finished}
                taskId={task.id}
              />
            ))}
          </div>

          {isDeleteTaskModalOpen && (
            <div className="m-4">
              <ConfirmDeleteModal
                isLoading={isLoadingDelete}
                onConfirm={() => handleDeleteAccount(taskIdDeleted)}
                title={"Tem certeza que deseja excluir esta tarefa?"}
                onClose={closeDeleteTaskModal}
              />
            </div>
          )}
          <EditTaskModal updatedTaskId={taskUpdated} />
        </>
      )}
    </>
  );
}
