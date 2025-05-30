import { useState, useEffect } from 'react';
import { getAboutPageContent } from '@/infra/api/contentful';
import type { AboutPageContent } from '@/infra/api/contentful';

export const useContentful = () => {
  const [content, setContent] = useState<AboutPageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const data = await getAboutPageContent();
        setContent(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch content from Contentful');
        console.error('Error fetching content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading, error };
}; 