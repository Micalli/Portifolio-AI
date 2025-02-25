import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TodoService } from "../../../../../app/services/todoService";
import toast from "react-hot-toast";
import { usePage } from "../../../PageContext/usePage";
import { updateTaskParams } from '../../../../../app/services/todoService/update';

const schema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;
export function useEditTaskModalController() {
  const { closeUpdateTaskModal, openUpdateTaskModal, isUpdateTaskModalOpen, setTaskUpdated, taskUpdated } = usePage();
  

  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: updateTaskParams) => {
      return TodoService.update(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {

      await mutateAsync({
        id: taskUpdated,
        ...data
      });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      closeUpdateTaskModal();
      toast.success("Tarefa editada com sucesso!");
    } catch (error) {
      toast.error("Não foi possível editar a tarefa");
      return error;
    } finally {
      reset();
    }
  });

  return {
    handleSubmit,
    isPending,
    register,
    errors: errors.description?.message,
    openUpdateTaskModal,
    closeUpdateTaskModal,
    isUpdateTaskModalOpen,
    setTaskUpdated
  };
}
