/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images from Unsplash (our demo images source)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
