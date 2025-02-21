import { Module } from '@nestjs/common';
import { GitHubService } from './GitHub.service';

@Module({
  imports: [],
  providers: [GitHubService],
  exports: [GitHubService],
})
export class GitHubModule {}
