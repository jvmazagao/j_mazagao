import React from 'react';
import { Link } from 'react-router-dom';
import { useAnalytics } from '@/analytics/react/hooks/use-analytics';

const HomePage: React.FC = () => {
  const { trackPageView, isReady } = useAnalytics();

  React.useEffect(() => {
    if (isReady) {
      trackPageView('Home Page', 'home-page');
    }
  }, [trackPageView, isReady]);

  return (
    <div className="home">
      <section className="hero mb-4">
        <h1>Hello, I'm João Mazagão</h1>
        <p className="text-subtle">
          Software Engineer & Technical Writer
        </p>
      </section>

      <section className="recent-posts mb-4">
        <h2>Latest Posts</h2>
        <div className="posts-grid">
          {/* Example blog post cards - replace with actual data */}
          <article className="card">
            <h3>Building a Minimalist Blog</h3>
            <p className="text-subtle mb-2">March 15, 2024</p>
            <p>
              Exploring the art of minimalism in web design and how it can enhance
              the reading experience...
            </p>
            <Link to="/blog/building-minimalist-blog" className="read-more">
              Read more →
            </Link>
          </article>

          <article className="card">
            <h3>The Joy of Simple Code</h3>
            <p className="text-subtle mb-2">March 10, 2024</p>
            <p>
              Why writing simple, maintainable code is one of the most important
              skills for a developer...
            </p>
            <Link to="/blog/joy-of-simple-code" className="read-more">
              Read more →
            </Link>
          </article>
        </div>
      </section>

      <section className="about-preview card">
        <h2>About Me</h2>
        <p>
          I'm a software engineer passionate about creating elegant solutions
          and sharing knowledge through writing. I believe in the power of
          simplicity and continuous learning.
        </p>
        <Link to="/about" className="read-more">
          Learn more about me →
        </Link>
      </section>
    </div>
  );
};

export default HomePage; 