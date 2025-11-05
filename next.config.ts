import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // For static builds
  },
  trailingSlash: true, // Recommended for static hosting
};

export default nextConfig;
