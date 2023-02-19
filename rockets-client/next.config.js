/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  ignoreDuringBuilds: true,
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
