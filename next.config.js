/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static pages for all routes
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Ensure all locale routes are generated during build
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig