import { Button } from '../../../components/Buttons';
import { useTodoController } from '../useTodoController';
import { Plus } from 'lucide-react';

export function Fab() {
  const { openNewTaskModal } = useTodoController();

    return (
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 p-0"
        variant="primary"
        onClick={openNewTaskModal}
      >
        <Plus className="w-8 h-8" />
      </Button>
    );
}