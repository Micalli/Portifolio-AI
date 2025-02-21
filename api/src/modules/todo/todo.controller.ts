import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoPriorityType } from './types/todo-priority.type';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(
    @Query('priority') priority: TodoPriorityType,
    @Query('finished') finished: boolean,
  ) {
    return this.todoService.findAll(finished, priority);
  }

  @Put(':toDoId')
  update(
    @Param('toDoId', ParseUUIDPipe) toDoId: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(toDoId, updateTodoDto);
  }

  @Delete(':toDoId')
  remove(@Param('toDoId', ParseUUIDPipe) toDoId: string) {
    return this.todoService.remove(toDoId);
  }
}
