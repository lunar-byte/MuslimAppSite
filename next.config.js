/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true, // Быстрая минификация через SWC
  reactStrictMode: true, // Включает StrictMode для дополнительных оптимизаций
  images: {
    unoptimized: false, // Включает оптимизацию изображений (для Vercel)
  },
  // Автоматическое разделение кода (code splitting) встроено в Next.js
  // Экспериментальные оптимизации импортов пакетов
  experimental: {
    optimizePackageImports: [],
  },
}

module.exports = nextConfig
