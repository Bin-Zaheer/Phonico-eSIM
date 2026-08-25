import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform.phonico.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
