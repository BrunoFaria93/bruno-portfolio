/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // 🔥 isso aqui desativa o overlay "N" do App Router
    instrumentationHook: false,
  },
};

export default nextConfig;
