/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ["borobazar.vercel.app", "localhost"],
  },
};

export default nextConfig;
