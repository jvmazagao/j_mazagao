export type DevToPost = {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  slug: string;
  cover_image: string | null;
  tag_list: string[];
}

const DEVTO_API_URL = 'https://dev.to/api';

export async function fetchUserArticles(username: string): Promise<DevToPost[]> {
  try {
    const response = await fetch(`${DEVTO_API_URL}/articles?username=${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching Dev.to articles:', error);
    return [];
  }
}

export async function fetchArticleBySlug(username: string, slug: string): Promise<DevToPost | null> {
  try {
    const response = await fetch(`${DEVTO_API_URL}/articles/${username}/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    const article = await response.json();
    return article;
  } catch (error) {
    console.error('Error fetching Dev.to article:', error);
    return null;
  }
} 