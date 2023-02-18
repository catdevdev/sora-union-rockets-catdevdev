/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  ignoreDuringBuilds: true,
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
