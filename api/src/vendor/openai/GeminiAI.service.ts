import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
  GenerativeModel,
  ChatSession,
} from '@google/generative-ai';

export class GeminiAIService {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private chat: ChatSession;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    this.model = this.genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: process.env.BASE_CONTEXT }],
        },
      ],
    });
  }

  async getResponse(prompt: string): Promise<string> {
    try {
      if (!this.chat) return 'A IA ainda está carregando. Tente novamente.';

      const totalTokens = await this.model.countTokens([prompt]);
      if (totalTokens.totalTokens >= 1500) return 'Limite de tokens excedido.';

      const result = await this.chat.sendMessage(prompt);
      const response = await result.response;

      return response.text();
    } catch (error) {
      console.error('Erro:', error);
      return 'Erro ao processar resposta.';
    }
  }
}
