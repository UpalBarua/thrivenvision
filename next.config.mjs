/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // domains: ["images.unsplash.com", "source.unsplash.com"],
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
