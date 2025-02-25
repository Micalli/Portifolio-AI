import { usePage } from "../pages/PageContext/usePage";
import { useTodoController } from "../pages/Todo/useTodoController";
import { CheckBox } from "./CheckBox";
import { Pen } from "./icons/Pen";
import { Trash } from "./icons/Trash";
import { CheckIcon } from "@radix-ui/react-icons";

interface TaskProps {
  taskId: string;
  description: string;
  priority: string;
  finished: boolean;
}

export function Task({ description, priority, finished, taskId }: TaskProps) {
  const { openDeleteTaskModal } = useTodoController();
  const { openUpdateTaskModal } = usePage();

  return (
    <div
      className={`p-4 w-full flex flex-col items-center ${
        finished && "opacity-40"
      }`}
    >
      <div
        className={`
          bg-slate-800/50 hover:bg-[rgba(148,163,184,0.1)] rounded-2xl py-4 px-4 
          w-full max-w-lg transition flex items-center justify-between h-auto 
          border-b-2 
          ${priority === "HIGH" && "border-red-500"}
          ${priority === "MEDIUM" && "border-yellow-500"}
          ${priority === "LOW" && "border-green-500"}
        `}
      >
        {/* Checkbox e Descrição */}
        <div className="flex items-center space-x-3 flex-1">
          <CheckBox checked={finished} />
          <h1 className="text-white text-base md:text-lg sm:text-sm break-words w-full">
            {description}
          </h1>
        </div>

        {/* Ícones de ação */}
        <div className="flex items-center space-x-3">
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all disabled:cursor-not-allowed"
            disabled={finished}
          >
            <CheckIcon
              className={`w-5 h-5 md:w-6 md:h-6 hover:text-green-500 ${
                finished && "hover:text-white"
              }`}
            />
          </button>
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            onClick={() => openUpdateTaskModal(taskId)}
          >
            <Pen className="w-5 h-5 md:w-6 md:h-6 " />
          </button>
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            onClick={() => openDeleteTaskModal(taskId)}
          >
            <Trash className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

