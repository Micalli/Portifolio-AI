import { priorities } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { Button } from "../../../../components/Buttons";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useTodoController } from '../../useTodoController';
import { useNewTaskModalController } from "./useNewTaskModalController";

export function NewTaskModal() {
  const { closeNewTaskModal, isNewTaskModalOpen } = useTodoController();

  const {
    errors,
    handleSubmit,
    isPending,
    register,
    prioritySelected,
    setPrioritySelected,
  } = useNewTaskModalController();
  

  return (
    <Modal
      open={isNewTaskModalOpen}
      title="Adicionar tarefa"
      onClose={closeNewTaskModal}
    >
      <form
        className="flex flex-col gap-4 justify-center"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          autoComplete="off"
          placeholder="Nome da tarefa"
          {...register("description")}
          error={errors}
        />
        <div className="text-secondary text-sm text-center mb-2">Escolha a prioridade</div>
        <div className="flex gap-4 justify-center mb-4">
          {priorities.map(({ priority, value }) => (
            <div
              key={value}
              className="cursor-pointer"
              onClick={() => setPrioritySelected(value)}
            >
              <div
                className={cn(`border w-fit px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300`,
                  priority === "Alta" && "border-error/50 text-error hover:bg-error/10",
                  priority === "Média" && "border-warning/50 text-warning hover:bg-warning/10",
                  priority === "Baixa" && "border-accent/50 text-accent hover:bg-accent/10",
                  prioritySelected === "HIGH" && priority === "Alta" && "bg-error text-white border-error shadow-lg shadow-error/25",
                  prioritySelected === "MEDIUM" && priority === "Média" && "bg-warning text-background border-warning shadow-lg shadow-warning/25",
                  prioritySelected === "LOW" && priority === "Baixa" && "bg-accent text-background border-accent shadow-lg shadow-accent/25"
                )}
              >
                {priority}
              </div>
            </div>
          ))}
        </div>
        <Button
          className="w-full h-12 bg-gradient-to-r from-accent to-accentHover text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          type="submit"
          isLoading={isPending}
        >
          Criar Tarefa
        </Button>
      </form>
    </Modal>
  );
}
