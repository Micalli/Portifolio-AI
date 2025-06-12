import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './modules/chat/chat.module';
import { GithubModule } from './modules/github/github.module';

@Module({
  imports: [ChatModule, GithubModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
