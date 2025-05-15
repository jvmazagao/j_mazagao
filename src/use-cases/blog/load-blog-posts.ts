import type { BlogPost } from "@/domain/entities/post";
import { fetchUserArticles } from "@/infra/api/devto";

export const loadBlogPostsByUsername = async (username: string): Promise<BlogPost[]> => {
    const blogPosts = await fetchUserArticles(username);
    return blogPosts;
}