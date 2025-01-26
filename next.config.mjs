/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.shadcnui-blocks.com/:path*',
        permanent: true,
      },
    ];
  },
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
  experimental: {
    outputFileTracingIncludes: {
      "/blocks/*": ["./src/**/*"],
    },
  },
};

export default nextConfig;
