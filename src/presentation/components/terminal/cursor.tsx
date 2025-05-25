import { useState, useEffect } from 'react';
import './cursor.css';

const techWords = [
  'node.js',
  'typescript',
  'python',
  'react',
  'docker',
  'kubernetes',
  'aws',
  'mongodb',
  'postgresql',
  'redis',
  'graphql',
  'rest',
  'microservices',
  'ci/cd',
  'git',
  'linux',
  'bash',
  'vim',
  'jest',
  'express',
];

export const Cursor = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    const typeWord = () => {
      const current = techWords[wordIndex];
      
      if (isDeleting) {
        setCurrentWord(prev => prev.slice(0, -1));
        if (currentWord === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % techWords.length);
        }
      } else {
        setCurrentWord(current.slice(0, currentWord.length + 1));
        if (currentWord === current) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(
      typeWord,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <span className="terminal-cursor">
      {currentWord}
      <span className="cursor" />
    </span>
  );
}; 