"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubService = void 0;
const axios_1 = require("axios");
class GitHubService {
    constructor() { }
    async findAll() {
        try {
            const response = await axios_1.default.get(`${process.env.GITHUB_API_URL}/repos`);
            const sortedRepos = response.data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
            return sortedRepos;
        }
        catch (error) {
            return 'Erro ao processar resposta.';
        }
    }
}
exports.GitHubService = GitHubService;
//# sourceMappingURL=GitHub.service.js.map