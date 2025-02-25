import { CreateChatDto } from './dto/create-chat.dto';
import { GeminiAIService } from 'src/vendor/openai/GeminiAI.service';
export declare class ChatService {
    private chatService;
    constructor(chatService: GeminiAIService);
    create({ message }: CreateChatDto): Promise<string>;
}
