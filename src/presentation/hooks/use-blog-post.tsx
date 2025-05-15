import type { BlogPost } from "@/domain/entities/post";
import { loadBlogPostsByUsername } from "@/use-cases/blog/load-blog-posts";
import { useState, useEffect } from "react";
import { useLoading } from "./use-loading";
import { useError } from "./use-error";

export const useBlogPost = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const { loading, setLoading } = useLoading();
    const { error, setError } = useError();
    
    useEffect(() => {
        const load = async () => {
            try {
                const blogPosts = await loadBlogPostsByUsername('jmazagao');
                setBlogPosts(blogPosts);
                setLoading(false);
            } catch (err) {
                setError('Failed to load blog posts');
                setLoading(false);
            }
        }

        load();
    }, []);

    return { blogPosts, loading, error };
}