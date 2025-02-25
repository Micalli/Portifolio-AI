export declare class GeminiAIService {
    private readonly baseContext;
    private genAI;
    constructor();
    getResponse(prompt: string): Promise<string>;
}
