import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['127.0.0.1', 'divyeshdabhi.pythonanywhere.com'],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true, // Optional: Vercel uses this behind the scenes
  },
};

export default nextConfig;
