import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ToDoRepository } from './repositories/todo.repositories';

@Global()
@Module({
  providers: [PrismaService, ToDoRepository],
  exports: [ToDoRepository],
})
export class DatabaseModule {}
