import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // ✅ domain of images
          pathname: "/**"  // allow all paths
      },
    ],
  },
};

export default nextConfig;
