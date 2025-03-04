import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'out', // Change output folder (default is 'out')
  
  // Set the base path for the GitHub Pages deployment (replace with your repository name)
  basePath: '/myPersona', // E.g. '/nextjs-persona'
  assetPrefix: '/myPersona/', // E.g. '/nextjs-persona/'
  
  // Disable Next.js Image Optimization for GitHub Pages (as it doesn't support SSR)
  images: {
    unoptimized: true, // Disable image optimization
  },

  // Optional: You can set up custom headers, redirects, etc.
};

export default nextConfig;
