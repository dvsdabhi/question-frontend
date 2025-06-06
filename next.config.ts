import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['127.0.0.1', 'divyeshdabhi.pythonanywhere.com'],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
