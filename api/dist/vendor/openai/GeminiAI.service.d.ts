export declare class GeminiAIService {
    private genAI;
    private model;
    private chat;
    constructor();
    getResponse(prompt: string): Promise<string>;
}
