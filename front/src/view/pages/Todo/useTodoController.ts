import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TodoService } from "../../../app/services/todoService";
import toast from "react-hot-toast";
import { usePage } from '../PageContext/usePage';

export function useTodoController() {
  const {
    closeDeleteTaskModal,
    isDeleteTaskModalOpen,
    openDeleteTaskModal,
    openUpdateTaskModal,
    closeUpdateTaskModal,
    isUpdateTaskModalOpen,
    isNewTaskModalOpen,
    closeNewTaskModal,
    openNewTaskModal,
    taskIdDeleted,
    taskUpdated,
  } = usePage();

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: TodoService.getAll,
  });

  const { mutateAsync: removeAccount, isPending: isLoadingDelete } =
    useMutation({
      mutationFn: async (taskId: string) => {
        return TodoService.remove(taskId);
      },
    });

  async function handleDeleteAccount(taskId: string) {
    try {
      await removeAccount(taskId);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Tarefa deletada com sucesso!");
      closeDeleteTaskModal();
    } catch (error) {
      console.log("🚀 ~ handleDeleteAccount ~ error:", error);
      toast.error("Ocorreu um erro ao deletar a tarefa!");
      return error;
    }
  }

  

  return {
    tasks: data ?? [],
    isFetching: isLoading,
    closeDeleteTaskModal,
    isDeleteTaskModalOpen,
    isLoadingDelete,
    handleDeleteAccount,
    openDeleteTaskModal,
    openUpdateTaskModal,

    isUpdateTaskModalOpen,
    isNewTaskModalOpen,
    closeNewTaskModal,
    closeUpdateTaskModal,
    openNewTaskModal,
    taskIdDeleted,
    taskUpdated,
  };
}
