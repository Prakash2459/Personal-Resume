import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
  
  // Development configuration
  ...(process.env.NODE_ENV === "development" && {
    experimental: {
      // @ts-expect-error: experimental flag may not be in current Next.js types yet
      allowedDevOrigins: [
        "http://192.168.1.7:3000",
        "https://www.jayaprakash.space",
        "https://jayaprakash.space",
      ],
    },
  }),
};

export default nextConfig;
