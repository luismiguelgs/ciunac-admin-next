import nextPWA from 'next-pwa';
const withPWA = nextPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
})


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

export default withPWA(nextConfig);

