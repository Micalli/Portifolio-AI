import axios from 'axios';

export class GitHubService {
  constructor() {}

  async findAll() {
    try {
      const response = await axios.get(`${process.env.GITHUB_API_URL}/repos`);
      const sortedRepos = response.data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      return sortedRepos;
    } catch (error) {
      return 'Erro ao processar resposta.';
    }
  }
}
