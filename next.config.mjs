/** @type {import('next').NextConfig} */
const nextConfig = {
	images:{
		remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
	},
	experimental: {
		serverActions: true
	},
	env:{
		FRONTEND_URL: process.env.FRONTEND_URL,
		BACKEND_URL: process.env.BACKEND_URL
	}
};

export default nextConfig;
