export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
}

const GITHUB_USERNAME = 'jmazagao';
const GITHUB_API_URL = 'https://api.github.com';

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&direction=desc&per_page=6`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': `${GITHUB_USERNAME}-blog`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await response.json();
    
    return repos
      .filter((repo: GitHubRepo) => !repo.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => 
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function fetchRepoTopics(username: string, repo: string): Promise<string[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${username}/${repo}/topics`,
      {
        headers: {
          'Accept': 'application/vnd.github.mercy-preview+json',
          'User-Agent': 'jmazagao-blog'
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repository topics');
    }

    const data = await response.json();
    return data.names || [];
  } catch (error) {
    console.error('Error fetching repository topics:', error);
    return [];
  }
} 