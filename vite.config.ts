import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  base: '/j_mazagao/',
  plugins: [
    react(),
    mdx(),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
});