import OpenAI from 'openai';

export class GeminiAIService {
  private openai: OpenAI;
  private conversationHistory: Array<{
    role: 'user' | 'assistant' | 'system';
    content: string;
  }>;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error('OPENAI_API_KEY não definida');
    }

    this.openai = new OpenAI({
      apiKey: apiKey,
    });

    const baseContext = process.env.BASE_CONTEXT;

    this.conversationHistory = baseContext
      ? [{ role: 'system' as const, content: baseContext }]
      : [];
  }

  async getResponse(prompt: string): Promise<string> {
    try {
      const MAX_CHARS = 6000; // ~1500 tokens

      if (prompt.length > MAX_CHARS) {
        return 'Mensagem muito longa.';
      }

      // Adiciona a mensagem do usuário ao histórico
      this.conversationHistory.push({
        role: 'user',
        content: prompt,
      });

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: this.conversationHistory,
        temperature: 0.7,
      });

      const assistantMessage =
        completion.choices[0]?.message?.content ||
        'Erro ao processar resposta.';

      // Adiciona a resposta do assistente ao histórico
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      console.error('Erro OpenAI:', error);
      return 'Erro ao processar resposta.';
    }
  }
}
