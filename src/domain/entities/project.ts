export type Project = {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    topics: string[] | null;
    stars: number;
    updatedAt: string;
    link: string;
  }