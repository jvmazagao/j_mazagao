import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogPage.css';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Hello World - My First Blog Post',
      date: '2023-09-15',
      excerpt: 'Welcome to my personal blog where I share my journey in web development and showcase my projects.',
      slug: '2023-09-15-hello-world'
    },
    {
      id: 2,
      title: 'Building Scalable Backend Systems',
      date: '2023-10-05',
      excerpt: 'Exploring architecture patterns for high-performance distributed systems.',
      slug: '2023-10-05-scalable-backends'
    },
    {
      id: 3,
      title: 'Optimizing Database Performance',
      date: '2023-11-12',
      excerpt: 'Tips and tricks for getting the most out of your database queries.',
      slug: '2023-11-12-database-optimization'
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">~/blog</h1>
      <p className="blog-description">Notes, thoughts, and technical articles</p>
      
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-item">
            <div className="post-date">{post.date}</div>
            <h2 className="post-title">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">Read more &gt;</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 