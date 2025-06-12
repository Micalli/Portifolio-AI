"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAIService = void 0;
const generative_ai_1 = require("@google/generative-ai");
class GeminiAIService {
    constructor() {
        this.genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            safetySettings: [
                {
                    category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: generative_ai_1.HarmBlockThreshold.BLOCK_ONLY_HIGH,
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
    async getResponse(prompt) {
        try {
            if (!this.chat)
                return 'A IA ainda está carregando. Tente novamente.';
            const totalTokens = await this.model.countTokens([prompt]);
            if (totalTokens.totalTokens >= 1500)
                return 'Limite de tokens excedido.';
            const result = await this.chat.sendMessage(prompt);
            const response = await result.response;
            return response.text();
        }
        catch (error) {
            console.error('Erro:', error);
            return 'Erro ao processar resposta.';
        }
    }
}
exports.GeminiAIService = GeminiAIService;
//# sourceMappingURL=GeminiAI.service.js.map