import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTaskParams } from "../../../../../app/services/todoService/create";
import { TodoService } from "../../../../../app/services/todoService";
import toast from "react-hot-toast";
import { usePage } from "../../../PageContext/usePage";

const schema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;
export function useNewTaskModalController() {
  const { closeNewTaskModal } = usePage();
  const [prioritySelected, setPrioritySelected] = useState<
    "HIGH" | "MEDIUM" | "LOW" | null
  >(null);

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
    mutationFn: async (data: createTaskParams) => {
      return TodoService.create(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        priority: prioritySelected,
      });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      closeNewTaskModal();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      toast.error("Não foi possível criar a tarefa");
      return error;
    } finally {
      reset();
      setPrioritySelected(null);
    }
  });

  return {
    handleSubmit,
    isPending,
    register,
    errors: errors.description?.message,
    setPrioritySelected,
    prioritySelected,
  };
}
