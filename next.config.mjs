/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com'
        }, {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
        }],
    },
};

export default nextConfig;
