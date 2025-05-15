import type { Project } from "../../domain/entities/project";
import { fetchUserRepos } from "../../infra/api/github";

export const loadProjectsByUsername = async (username: string): Promise<Project[]> => {
  const projects = await fetchUserRepos(username);
  return projects;
}