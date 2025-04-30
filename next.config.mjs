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
	outputFileTracingExcludes: {
		"*": [".next/export-detail.json"],
	},
	webpack: (
		config,
		{
			buildId: _buildId,
			dev,
			isServer: _isServer,
			defaultLoaders: _defaultLoaders,
			nextRuntime: _nextRuntime,
			webpack: _webpack,
		},
	) => {
		if (config.cache && !dev) {
			config.cache = Object.freeze({ type: "memory" });
		}
		// Important: return the modified config
		return config;
	},
};

export default nextConfig;
