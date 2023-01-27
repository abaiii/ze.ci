/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.isteed.cc",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
