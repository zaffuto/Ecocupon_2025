/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    PORT: 4000,
  },
}

module.exports = nextConfig
