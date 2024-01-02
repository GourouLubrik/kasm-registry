/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Guru Registry',
    description: 'The dark guru store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://gouroulubrik.github.io/kasm-registry/',
    contactUrl: 'https://github.com/GourouLubrik/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
