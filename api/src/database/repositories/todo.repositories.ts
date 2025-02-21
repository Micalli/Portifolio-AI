import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import { Prisma } from '@prisma/client';

@Injectable()
export class ToDoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TodoCreateArgs) {
    return this.prismaService.todo.create(createDto);
  }
  findMany(findMamyDto: Prisma.TodoFindManyArgs) {
    return this.prismaService.todo.findMany(findMamyDto);
  }
  findFirst(findFirstDto: Prisma.TodoFindFirstArgs) {
    return this.prismaService.todo.findFirst(findFirstDto);
  }
  update(updateDto: Prisma.TodoUpdateArgs) {
    return this.prismaService.todo.update(updateDto);
  }
  delete(deleteDto: Prisma.TodoDeleteArgs) {
    return this.prismaService.todo.delete(deleteDto);
  }
}
