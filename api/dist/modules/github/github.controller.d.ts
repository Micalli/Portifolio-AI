import { GithubService } from './github.service';
import { UpdateGithubDto } from './dto/update-github.dto';
export declare class GithubController {
    private readonly githubService;
    constructor(githubService: GithubService);
    findAll(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateGithubDto: UpdateGithubDto): string;
    remove(id: string): string;
}
