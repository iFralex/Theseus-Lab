import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/Theseus-Lab",
  assetPrefix: "/Theseus-Lab/",
    images: {
    unoptimized: true,
  },
};

export default nextConfig;
