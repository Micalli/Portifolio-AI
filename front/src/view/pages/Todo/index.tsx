import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../app/hooks/useWindowWidth";
import { Button } from "../../components/Buttons";
import { ConfirmDeleteModal } from "../../components/ConfirmDeleteModal";
import { Spinner } from "../../components/Spinner";
import { Task } from "../../components/Task";
import { PageProvider, PageContext } from "../PageContext";
import { EditTaskModal } from "./modals/EditTaskModal";
import { NewTaskModal } from "./modals/NewTaskModal";
import { useTodoController } from "./useTodoController";
import { motion } from "framer-motion";

export function Todo() {
  const { isFetching, tasks, handleDeleteAccount, isLoadingDelete } =
    useTodoController();

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
      <PageProvider>
        <PageContext.Consumer>
          {({
            openNewTaskModal,
            isDeleteTaskModalOpen,
            closeDeleteTaskModal,
            taskIdDeleted,
            taskUpdated,
          }) => (
            <>
              {isFetching && (
                <div className=" justify-center flex items-center h-full">
                  <Spinner classname="w-10 h-10" />
                </div>
              )}

              {tasks.length > 0 && !isFetching && (
                <>
                  <div className="h-full  w-full flex flex-col items-center mt-10 text-white">
                    <h1 className="mb-10  text-5xl font-thin">
                      Todo
                    </h1>

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
                  <Button
                    className="text-white hover:text-black text-3xl px-3 bg-slate-800 hover:bg-[#56ecb5]  rounded-full fixed bottom-0 right-0 mr-6 mb-6"
                    onClick={openNewTaskModal}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Button>
                  {isDeleteTaskModalOpen && (
                    <div className='m-4'>

                    <ConfirmDeleteModal
                      isLoading={isLoadingDelete}
                      onConfirm={() => handleDeleteAccount(taskIdDeleted)}
                      title={"Tem certeza que deseja excluir esta tarefa?"}
                      onClose={closeDeleteTaskModal}
                      />
                      </div>
                  )}
                  <EditTaskModal updatedTaskId={taskUpdated} />
                  <NewTaskModal />
                </>
              )}
            </>
          )}
        </PageContext.Consumer>
      </PageProvider>
    </>
  );
}
