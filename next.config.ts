import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide source maps in production (already default in Next.js 16, but explicitly set for clarity)
  productionBrowserSourceMaps: false,

  // Disable React Strict Mode for production to reduce console noise
  reactStrictMode: false,

  // Remove console logs in production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // Additional compiler optimizations
  experimental: {
    // Reduce bundle size by removing unused code
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
