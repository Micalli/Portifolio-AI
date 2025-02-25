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
          placeholder="Tarefa"
          className={`border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500 w-full ${
            !errors && "mb-4"
          }   `}
          {...register("description")}
          error={errors}
        />

        <Button
          className="mt-6  bg-[#1BAC77] text-white  hover:enabled:bg-[#137853]"
          type="submit"
          isLoading={isPending}
        >
          Editar
        </Button>
      </form>
    </Modal>
  );
}
