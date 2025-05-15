import type { BlogPost } from "@/domain/entities/post";
import './blog.css';

export const Blog = ({ post }: { post: BlogPost }) => {
    return (
        <div key={post.id} className="post-item">
        <div className="post-date">
          {new Date(post.published_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
        <h2 className="post-title">
          <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h2>
        <p className="post-excerpt">{post.description}</p>
        {post.tag_list.length > 0 && (
          <div className="post-tags">
            {post.tag_list.map((tag, index) => (
              <span key={index} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read on Dev.to &gt;
        </a>
      </div>
    )
}