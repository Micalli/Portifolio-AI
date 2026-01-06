import { usePage } from "../pages/PageContext/usePage";
import { useTodoController } from "../pages/Todo/useTodoController";
import { CheckBox } from "./CheckBox";
import { Pencil, Trash2, Check } from "lucide-react";

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
      className={`w-full flex flex-col items-center ${
        finished && "opacity-40"
      }`}
    >
      <div
        className={`
          bg-card/50 backdrop-blur-sm hover:bg-card/70 rounded-2xl py-4 px-4 
          w-full transition flex items-center justify-between h-auto 
          border border-border/20 border-l-4 shadow-sm hover:shadow-md
          ${priority === "HIGH" && "border-l-error"}
          ${priority === "MEDIUM" && "border-l-warning"}
          ${priority === "LOW" && "border-l-accent"}
        `}
      >
        <div className="flex items-center space-x-3 flex-1">
          <CheckBox checked={finished} />
          <h1 className="text-primary text-base md:text-lg sm:text-sm break-words w-full">
            {description}
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all disabled:cursor-not-allowed"
            disabled={finished}
          >
            <Check
              className={`w-5 h-5 md:w-6 md:h-6 hover:text-accent ${
                finished && "hover:text-primary"
              }`}
            />
          </button>
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            onClick={() => openUpdateTaskModal(taskId)}
          >
            <Pencil className="w-5 h-5 md:w-6 md:h-6 " />
          </button>
          <button
            className="cursor-pointer opacity-70 hover:opacity-100 transition-all"
            onClick={() => openDeleteTaskModal(taskId)}
          >
            <Trash2 className="w-5 h-5 md:w-6 md:h-6 text-error" />
          </button>
        </div>
      </div>
    </div>
  );
}

