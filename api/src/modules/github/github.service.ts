import { Injectable } from '@nestjs/common';
import { UpdateGithubDto } from './dto/update-github.dto';
import { GitHubService } from 'src/vendor/github/GitHub.service';

@Injectable()
export class GithubService {
  constructor(private gitHubService: GitHubService) {}

  findAll() {
    const response = this.gitHubService.findAll();

    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} github`;
  }

  update(id: number, updateGithubDto: UpdateGithubDto) {
    return `This action updates a #${id} github`;
  }

  remove(id: number) {
    return `This action removes a #${id} github`;
  }
}
