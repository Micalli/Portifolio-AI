import { Button } from "../../../../components/Buttons";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { usePage } from "../../../PageContext/usePage";
import { useEditTaskModalController } from "./useEditTaskModalController";

interface EditTaskModalProps {
  updatedTaskId: string;
}

export function EditTaskModal({updatedTaskId} : EditTaskModalProps) {
  const { closeUpdateTaskModal, isUpdateTaskModalOpen, setTaskUpdated } = usePage();

  setTaskUpdated(updatedTaskId);
  const { errors, handleSubmit, isPending, register } =
    useEditTaskModalController();
  return (
    <Modal
      open={isUpdateTaskModalOpen}
      title="Editar tarefa"
      onClose={closeUpdateTaskModal}
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

        <Button
          className="w-full h-12 bg-gradient-to-r from-accent to-accentHover text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 mt-6"
          type="submit"
          isLoading={isPending}
        >
          Salvar Alterações
        </Button>
      </form>
    </Modal>
  );
}
