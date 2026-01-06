export declare class GeminiAIService {
    private openai;
    private conversationHistory;
    constructor();
    getResponse(prompt: string): Promise<string>;
}
