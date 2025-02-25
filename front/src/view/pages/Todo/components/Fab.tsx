import { Button } from '../../../components/Buttons';
import { useTodoController } from '../useTodoController';

export function Fab() {
  const { openNewTaskModal } = useTodoController();

    return (
      <Button
        className="text-white hover:text-black text-3xl px-3 bg-slate-800 hover:bg-[#56ecb5]  rounded-full fixed bottom-0 right-0 mr-6 mb-6"
        onClick={openNewTaskModal}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </Button>
    );
}