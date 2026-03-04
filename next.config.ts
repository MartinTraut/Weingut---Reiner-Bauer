import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weingut-rainer-bauer.de",
      },
      {
        protocol: "https",
        hostname: "weingut-rainer-bauer.de",
      },
      {
        protocol: "https",
        hostname: "*.jimcontent.com",
      },
      {
        protocol: "https",
        hostname: "web.archive.org",
      },
    ],
  },
};

export default nextConfig;
