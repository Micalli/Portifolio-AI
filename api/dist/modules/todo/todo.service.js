"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_repositories_1 = require("../../database/repositories/todo.repositories");
const common_2 = require("@nestjs/common");
let TodoService = class TodoService {
    constructor(toDoRepository) {
        this.toDoRepository = toDoRepository;
    }
    async create(createTodoDto) {
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
    async findAll(finished, priority) {
        return await this.toDoRepository.findMany({
            where: {
                finished,
                priority,
            },
        });
    }
    async findOne(toDoId) {
        return await this.toDoRepository.findFirst({
            where: {
                id: toDoId,
            },
        });
    }
    async update(toDoId, updateTodoDto) {
        const { description, priority, finished } = updateTodoDto;
        const toDo = await this.findOne(toDoId);
        if (!toDo)
            throw new common_2.NotFoundException('O afazer não foi encontrado.');
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
    async remove(toDoId) {
        const toDo = await this.findOne(toDoId);
        if (!toDo)
            throw new common_2.NotFoundException('O afazer não foi encontrado.');
        return await this.toDoRepository.delete({
            where: {
                id: toDoId,
            },
        });
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [todo_repositories_1.ToDoRepository])
], TodoService);
//# sourceMappingURL=todo.service.js.map