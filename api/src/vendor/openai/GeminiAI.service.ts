import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';

export class GeminiAIService {
  private readonly baseContext: string;
  private genAI;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.baseContext = process.env.BASE_CONTEXT;
  }

  async getResponse(prompt: string): Promise<string> {
    try {
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ];

      const model = this.genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        safetySettings,
      });

      const totalTokens = await model.countTokens(prompt);
      if (totalTokens >= 1500) return 'Limite de tokens excedido.';
      const result = await model.generateContent([this.baseContext, prompt]);
      const response = await result.response;

      return response.text();
    } catch (error) {
      console.log('🚀 ~ GeminiAIService ~ getResponse ~ error:', error);
      return 'Erro ao processar resposta.';
    }
  }
}
