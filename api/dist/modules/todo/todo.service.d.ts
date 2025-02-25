import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ToDoRepository } from 'src/database/repositories/todo.repositories';
import { TodoPriorityType } from './types/todo-priority.type';
export declare class TodoService {
    private readonly toDoRepository;
    constructor(toDoRepository: ToDoRepository);
    create(createTodoDto: CreateTodoDto): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
    findAll(finished?: boolean, priority?: TodoPriorityType): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    findOne(toDoId: string): Promise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }>;
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
