import { Button } from './Buttons';
import { Trash } from './icons/Trash';
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
    onConfirm(): void;
    onClose(): void;
    title: string;
    description?: string;
    isLoading: boolean;
}

export function ConfirmDeleteModal({
    onClose,
    onConfirm,
    title,
    description,
    isLoading,
}: ConfirmDeleteModalProps) {
    return (
      <Modal open title="Excluir" onClose={onClose}>
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-[52px] h-[52px] rounded-full bg-error/10 flex items-center justify-center" onClick={onClose}>
            <Trash className="w-6 h-6 text-error" />
          </div>
          <p className=" w-[180px] text-secondary tracking-[-0.5px] font-bold">
            {title}
          </p>
          {description && (
            <p className="text-primary tracking-[-0.5px] ">{description}</p>
          )}
        </div>

        <div className="mt-10 space-y-4">
          <Button
            variant="danger"
            className="w-full "
            onClick={onConfirm}
            isLoading={isLoading}
          >
            Sim, desejo excluir
          </Button>
          <Button
            variant="ghost"
            className="w-full "
            onClick={onClose}
            disabled={isLoading}
          >
            Cancelar
          </Button>
        </div>
      </Modal>
    );
}
