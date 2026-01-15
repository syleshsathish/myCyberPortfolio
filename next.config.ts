import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ REQUIRED for GitHub Pages (ADDED)
  output: "export",

  // ✅ REQUIRED if repo name is NOT your username (ADDED)
  basePath: "/sylesh-portfolio",
  assetPrefix: "/sylesh-portfolio/",

  images: {
    // ✅ REQUIRED for GitHub Pages (ADDED)
    unoptimized: true,

    // 🔹 YOUR EXISTING CODE (UNCHANGED)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
    ],
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 100],
  },
};

export default nextConfig;
