import { createContext, useCallback, useState } from "react";

interface PageContextValue {
  isNewTaskModalOpen: boolean;
  closeNewTaskModal(): void;
  openNewTaskModal(): void;
  isDeleteTaskModalOpen: boolean;
  closeDeleteTaskModal(): void;
  openDeleteTaskModal(taskId: string): void;
  taskIdDeleted: string;
  closeUpdateTaskModal(): void;
  openUpdateTaskModal(taskId: string): void;
  taskUpdated: string;
  isUpdateTaskModalOpen: boolean;
  setTaskUpdated(value:string): void;
}

export const PageContext = createContext({} as PageContextValue);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState<boolean>(false);
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] =
    useState<boolean>(false);
  const [isUpdateTaskModalOpen, setIsUpdateTaskModalOpen] = useState<boolean>(false);


  const [taskIdDeleted, setTaskIdDeleted] = useState<string>("");
  const [taskUpdated, setTaskUpdated] = useState<string>("");




  const openNewTaskModal = useCallback(() => {
    setIsNewTaskModalOpen(true);
  }, []);

  const closeNewTaskModal = useCallback(() => {
    setIsNewTaskModalOpen(false);
  }, []);

  const openDeleteTaskModal = useCallback((taskId: string) => {
    setIsDeleteTaskModalOpen(true);
    setTaskIdDeleted(taskId);
  }, []);

  const closeDeleteTaskModal = useCallback(() => {
    setIsDeleteTaskModalOpen(false);
    setTaskIdDeleted("");

  }, []);

  const openUpdateTaskModal = useCallback((taskId: string) => {
    setIsUpdateTaskModalOpen(true);
    setTaskUpdated(taskId);
  }, []);

  const closeUpdateTaskModal = useCallback(() => {
    setIsUpdateTaskModalOpen(false);
    setTaskUpdated("");
  }, []);

  return (
    <PageContext.Provider
      value={{
        openNewTaskModal,
        closeNewTaskModal,
        isNewTaskModalOpen,
        openDeleteTaskModal,
        closeDeleteTaskModal,
        isDeleteTaskModalOpen,
        taskIdDeleted,
        openUpdateTaskModal,
        closeUpdateTaskModal,
        taskUpdated,
        isUpdateTaskModalOpen,
        setTaskUpdated
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
