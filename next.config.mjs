/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com'
        }],
    },
};

export default nextConfig;
