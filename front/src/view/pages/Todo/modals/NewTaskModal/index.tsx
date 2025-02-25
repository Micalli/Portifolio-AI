import { useEffect } from 'react';
import { priorities } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { Button } from "../../../../components/Buttons";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { usePage } from "../../../PageContext/usePage";
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
          placeholder="Task"
          className={`border border-gray-600 rounded-4xl px-3 py-2 placeholder:text-gray-500 focus:border-gray-500 w-full ${
            !errors && "mb-4"
          }   `}
          {...register("description")}
          error={errors}
        />
        Escolha a prioridade da tarefa
        <div className="flex gap-4 justify-center">
          {priorities.map(({ priority, value }) => (
            <div
              className="cursor-pointer"
              onClick={() => setPrioritySelected(value)}
            >
              <div
                className={cn(`border w-fit px-4 py-1 rounded-full text-base opacity-70 
                    ${
                      priority === "Alta" &&
                      "border-red-400  bg-red-500/50 hover:bg-red-500/70"
                    }
                    ${
                      priority === "Média" &&
                      "border-yellow-400 bg-yellow-500/50 hover:bg-yellow-500/70"
                    }
                    ${
                      priority === "Baixa" &&
                      " border-green-400 bg-green-500/50 hover:bg-green-500/70"
                    }
                    ${
                      prioritySelected === "HIGH" &&
                      priority === "Alta" &&
                      "  bg-red-500/80 opacity-100 "
                    }
                    ${
                      prioritySelected === "MEDIUM" &&
                      priority === "Média" &&
                      " bg-yellow-500/80  opacity-100"
                    }
                    ${
                      prioritySelected === "LOW" &&
                      priority === "Baixa" &&
                      " bg-green-500/80  opacity-100 "
                    }
                `)}
              >
                {priority}
              </div>
            </div>
          ))}
        </div>
        <Button
          className="mt-6  bg-[#1BAC77] text-white  hover:enabled:bg-[#137853]"
          type="submit"
          isLoading={isPending}
        >
          Criar
        </Button>
      </form>
    </Modal>
  );
}
