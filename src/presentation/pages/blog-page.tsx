import React from 'react';
import '../../styles/BlogPage.css';
import { useBlogPost } from '@/presentation/hooks/use-blog-post';
import { Blog } from '../components/blogs/blog';


const BlogPage: React.FC = () => {
  const { blogPosts, loading, error } = useBlogPost();

  if (loading) {
    return (
      <div className="blog-container">
        <h1 className="blog-title">~/blog</h1>
        <p className="blog-description">Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-container">
        <h1 className="blog-title">~/blog</h1>
        <p className="blog-description" style={{ color: 'var(--error-color, #eb6f92)' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <h1 className="blog-title">~/blog</h1>
      <p className="blog-description">Notes, thoughts, and technical articles</p>
      
      <div className="posts-list">
        {blogPosts.map(post => (
          <Blog key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 