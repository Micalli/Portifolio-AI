"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiAIService = void 0;
const openai_1 = require("openai");
class GeminiAIService {
    constructor() {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error('OPENAI_API_KEY não definida');
        }
        this.openai = new openai_1.default({
            apiKey: apiKey,
        });
        const baseContext = process.env.BASE_CONTEXT;
        this.conversationHistory = baseContext
            ? [{ role: 'system', content: baseContext }]
            : [];
    }
    async getResponse(prompt) {
        try {
            const MAX_CHARS = 6000;
            if (prompt.length > MAX_CHARS) {
                return 'Mensagem muito longa.';
            }
            this.conversationHistory.push({
                role: 'user',
                content: prompt,
            });
            const completion = await this.openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: this.conversationHistory,
                temperature: 0.7,
            });
            const assistantMessage = completion.choices[0]?.message?.content ||
                'Erro ao processar resposta.';
            this.conversationHistory.push({
                role: 'assistant',
                content: assistantMessage,
            });
            return assistantMessage;
        }
        catch (error) {
            console.error('Erro OpenAI:', error);
            return 'Erro ao processar resposta.';
        }
    }
}
exports.GeminiAIService = GeminiAIService;
//# sourceMappingURL=GeminiAI.service.js.map