import { useState, useEffect } from 'react';
import { loadProjectsByUsername } from '../../use-cases/projects/load-projects';
import type { Project } from '../../domain/entities/project';
import { useLoading } from './use-loading';
import { useError } from './use-error';
export const useProjects = (username: string) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { loading, setLoading } = useLoading();
  const { error, setError } = useError();

  useEffect(() => {
    const load = async () => {
      try {
        const repos = await loadProjectsByUsername(username);
        setProjects(repos);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    load();
  }, [username]);

  return { projects, loading, error };
};
