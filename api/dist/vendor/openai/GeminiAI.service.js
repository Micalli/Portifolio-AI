"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAIService = void 0;
const generative_ai_1 = require("@google/generative-ai");
class GeminiAIService {
    constructor() {
        this.genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.baseContext = process.env.BASE_CONTEXT;
    }
    async getResponse(prompt) {
        try {
            const safetySettings = [
                {
                    category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: generative_ai_1.HarmBlockThreshold.BLOCK_ONLY_HIGH,
                },
            ];
            const model = this.genAI.getGenerativeModel({
                model: 'gemini-1.5-flash',
                safetySettings,
            });
            const totalTokens = await model.countTokens(prompt);
            if (totalTokens >= 1500)
                return 'Limite de tokens excedido.';
            const result = await model.generateContent([this.baseContext, prompt]);
            const response = await result.response;
            return response.text();
        }
        catch (error) {
            return 'Erro ao processar resposta.';
        }
    }
}
exports.GeminiAIService = GeminiAIService;
//# sourceMappingURL=GeminiAI.service.js.map