/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects() {
		return [
			{
				source: "/:path*",
				destination: "https://www.shadcnui-blocks.com/:path*",
				has: [
					{
						type: "host",
						value: "shadcn-ui-blocks.akashmoradiya.com",
					},
				],
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
	outputFileTracingIncludes: {
		"/blocks/*": ["./src/**/*"],
	},
	experimental: {},
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
