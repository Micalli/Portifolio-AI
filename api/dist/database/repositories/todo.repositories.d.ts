import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class ToDoRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.TodoCreateArgs): Prisma.Prisma__TodoClient<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findMany(findMamyDto: Prisma.TodoFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }[]>;
    findFirst(findFirstDto: Prisma.TodoFindFirstArgs): Prisma.Prisma__TodoClient<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(updateDto: Prisma.TodoUpdateArgs): Prisma.Prisma__TodoClient<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    delete(deleteDto: Prisma.TodoDeleteArgs): Prisma.Prisma__TodoClient<{
        id: string;
        description: string;
        priority: import(".prisma/client").$Enums.TodoPriorityType;
        finished: boolean;
        CreatedAt: Date;
        UpdatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
