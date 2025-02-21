import axios from 'axios';

export class GitHubService {
  constructor() {}

  async findAll() {
    try {
      const response = await axios.get(`${process.env.GITHUB_API_URL}/repos`);

      return response.data;
    } catch (error) {
      console.log('🚀 ~ GeminiAIService ~ getResponse ~ error:', error);
      return 'Erro ao processar resposta.';
    }
  }
}
