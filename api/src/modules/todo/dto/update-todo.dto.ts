import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoPriorityType } from '../types/todo-priority.type';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TodoPriorityType)
  priority: TodoPriorityType;

  finished: boolean;
}
