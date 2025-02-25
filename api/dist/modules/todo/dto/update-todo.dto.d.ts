import { CreateTodoDto } from './create-todo.dto';
import { TodoPriorityType } from '../types/todo-priority.type';
declare const UpdateTodoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTodoDto>>;
export declare class UpdateTodoDto extends UpdateTodoDto_base {
    description: string;
    priority: TodoPriorityType;
    finished: boolean;
}
export {};
