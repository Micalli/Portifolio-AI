import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { GeminiAIService } from 'src/vendor/openai/GeminiAI.service';

@Injectable()
export class ChatService {
  constructor(private chatService: GeminiAIService) {}
  create({ message }: CreateChatDto) {
    console.log('🚀 ~ ChatService ~ create ~ message:', message);
    const response = this.chatService.getResponse(message);

    return response;
  }
}
