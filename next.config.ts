import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 85, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ias.rushandball.ru",
        pathname: "/api/Media/TeamLogo/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "3mb",
    },
  },
  output: "standalone",
  allowedDevOrigins: ["192.168.0.61"],
};

export default nextConfig;
