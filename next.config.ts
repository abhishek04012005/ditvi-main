/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes from URLs
  trailingSlash: false,
  // Configure base path if needed
  // basePath: '',
}

module.exports = nextConfig


