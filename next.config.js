/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  env: {
    PORT: '4000'
  }
}

module.exports = nextConfig
