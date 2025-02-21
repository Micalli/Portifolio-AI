import { Module } from '@nestjs/common';
import { GeminiAIService } from './GeminiAI.service';

@Module({
  imports: [],
  providers: [GeminiAIService],
  exports: [GeminiAIService],
})
export class GeminiAIModule {}
