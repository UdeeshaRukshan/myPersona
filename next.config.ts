import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'out', // Change output folder (default is 'out')
  basePath: '/myPersona', // E.g. '/nextjs-persona'
  assetPrefix: '/myPersona/', // E.g. '/nextjs-persona/'
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
