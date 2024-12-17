/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
              source: '/api/:path*',
              destination: 'https://zergpool.com/:path*'
            }
        ]
    }
};

export default nextConfig;
