/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
