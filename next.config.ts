import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'out', // Change output folder (default is 'out')
  
  // Only apply basePath and assetPrefix in production
  basePath: isProd ? '/myPersona' : '',
  assetPrefix: isProd ? '/myPersona/' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
