import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoPriorityType } from '../types/todo-priority.type';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TodoPriorityType)
  priority: TodoPriorityType;
}
