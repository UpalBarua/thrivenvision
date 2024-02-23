/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
