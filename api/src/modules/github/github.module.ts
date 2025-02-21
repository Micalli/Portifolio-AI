import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { GitHubModule } from 'src/vendor/github/GitHub.module';

@Module({
  imports: [GitHubModule],
  controllers: [GithubController],
  providers: [GithubService],
})
export class GithubModule {}
