import { UpdateGithubDto } from './dto/update-github.dto';
import { GitHubService } from 'src/vendor/github/GitHub.service';
export declare class GithubService {
    private gitHubService;
    constructor(gitHubService: GitHubService);
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateGithubDto: UpdateGithubDto): string;
    remove(id: number): string;
}
