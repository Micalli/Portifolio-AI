import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ToDoRepository } from 'src/database/repositories/todo.repositories';
import { TodoPriorityType } from './types/todo-priority.type';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TodoService {
  constructor(private readonly toDoRepository: ToDoRepository) {}
  async create(createTodoDto: CreateTodoDto) {
    const { description, priority } = createTodoDto;
    return await this.toDoRepository.create({
      data: {
        description,
        priority,
        finished: false,
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
      },
    });
  }

  async findAll(finished?: boolean, priority?: TodoPriorityType) {
    return await this.toDoRepository.findMany({
      where: {
        finished,
        priority,
      },
    });
  }

  async findOne(toDoId: string) {
    return await this.toDoRepository.findFirst({
      where: {
        id: toDoId,
      },
    });
  }

  async update(toDoId: string, updateTodoDto: UpdateTodoDto) {
    const { description, priority, finished } = updateTodoDto;

    const toDo = await this.findOne(toDoId);
    if (!toDo) throw new NotFoundException('O afazer não foi encontrado.');

    return await this.toDoRepository.update({
      where: {
        id: toDoId,
      },
      data: {
        description,
        priority,
        finished,
        UpdatedAt: new Date(),
      },
    });
  }

  async remove(toDoId: string) {
    const toDo = await this.findOne(toDoId);

    if (!toDo) throw new NotFoundException('O afazer não foi encontrado.');

    return await this.toDoRepository.delete({
      where: {
        id: toDoId,
      },
    });
  }
}
