import { Controller, Get } from '@nestjs/common';
import { Octokit } from '@octokit/core';
import fetch from 'node-fetch';

@Controller('github')
export class GithubController {
  @Get('commits')
  async getCommits() {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
      request: {
        fetch,
      },
    });

    const owner = process.env.GIT_OWNER;
    const repo = process.env.GIT_REPO;

    try {
      const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits`;
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/commits',
        {
          owner,
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      );

      const commitsData = response.data;
      return commitsData;
    } catch (error) {
      console.error('Error al obtener los commits de GitHub:', error);
      throw error;
    }
  }
}
