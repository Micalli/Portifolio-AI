import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { GeminiAIModule } from 'src/vendor/openai/GeminiAI.module';

@Module({
  imports: [GeminiAIModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
