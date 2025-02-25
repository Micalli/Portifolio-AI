import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoPriorityType } from './types/todo-priority.type';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    findAll(priority: TodoPriorityType, finished: boolean): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    update(toDoId: string, updateTodoDto: UpdateTodoDto): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    remove(toDoId: string): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
}
