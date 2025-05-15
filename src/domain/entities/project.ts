export type Project = {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    topics: string[] | null;
    stargazers_count: number;
    updated_at: string;
    html_url: string;
  }