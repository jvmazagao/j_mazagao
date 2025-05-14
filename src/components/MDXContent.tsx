import React from 'react';

interface MDXContentProps {
  children: React.ReactNode;
}

const MDXContent: React.FC<MDXContentProps> = ({ children }) => {
  return (
    <div className="mdx-content">
      {children}
    </div>
  );
};

export default MDXContent; 