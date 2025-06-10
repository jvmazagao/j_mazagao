# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. The website features a clean, terminal-inspired design and integrates with various services for content management and analytics.

## Features

- 🎨 Modern, terminal-inspired UI design
- 📱 Fully responsive layout
- 📊 Analytics integration with Firebase
- 📝 Blog system with Contentful CMS integration
- 🔗 Social media links with icon support
- 🎯 Project showcase with GitHub integration
- 📈 SEO optimized

## Project Structure

```
src/
├── analytics/           # Analytics integration
│   ├── providers/      # Analytics providers (Firebase)
│   └── react/         # React hooks and context for analytics
├── domain/            # Domain entities and types
├── infra/            # Infrastructure layer
│   ├── api/          # External API integrations
│   └── contentful/   # Contentful CMS integration
├── presentation/     # UI components and pages
│   ├── components/   # Reusable React components
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Page components
│   └── utils/        # Utility functions
├── styles/           # Global styles and CSS modules
└── use-cases/        # Application business logic
```

## Implemented Modules

### Analytics
- Firebase Analytics integration
- Page view tracking
- Event tracking for user interactions
- Click tracking for navigation and social links

### Content Management
- Contentful CMS integration for blog posts
- Dynamic content loading
- Fallback content handling

### UI Components
- Terminal-style interface
- Responsive navigation
- Social media links with icons
- Project showcase grid
- Blog post list and detail views

### Data Fetching
- GitHub API integration for projects
- Contentful API integration for blog posts
- Contact information management

## Environment Variables

To build and run this project, you need to set up the following environment variables:

1. Create a `.env` file in the root directory
2. Add the following variables:
   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

You can get these values from your Contentful account:
1. Go to your Contentful space
2. Navigate to Settings > API keys
3. Create a new API key or use an existing one
4. Copy the Space ID and Content Delivery API access token

Note: Make sure to add `.env` to your `.gitignore` file to keep your credentials secure.

## Development

This project uses:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) for Fast Refresh
- TypeScript for type safety
- ESLint for code quality
- React Router for navigation
- React Icons for icon support
- Firebase for analytics
- Contentful for content management

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```
