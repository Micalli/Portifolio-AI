import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './modules/chat/chat.module';
import { GithubModule } from './modules/github/github.module';
import { TodoModule } from './modules/todo/todo.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ChatModule, GithubModule, TodoModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
