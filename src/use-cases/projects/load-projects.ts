import type { Project } from "../../domain/entities/project";
import { fetchUserRepos } from "../../infra/api/github";

export const loadProjectsByUsername = async (username: string): Promise<Project[]> => {
  const projects = await fetchUserRepos(username);
  return projects.map((project) => ({
    id: project.id,
    description: project.description,
    link: project.html_url,
    name: project.name,
    language: project.language,
    topics: project.topics,
    stars: project.stargazers_count,
    updatedAt: project.updated_at,
  }));
}