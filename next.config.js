/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'images.unsplash.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
