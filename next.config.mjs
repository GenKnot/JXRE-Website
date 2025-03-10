/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'api.jxre.ca'],
        unoptimized: true
    },
};


export default nextConfig;
