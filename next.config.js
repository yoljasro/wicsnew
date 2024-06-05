const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'ru', 'uz', 'tr', 'ar-SA'],
    defaultLocale: 'ru'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone",
  images: {
    domains: ['localhost', 'api.kardise.com' , 'worldhalalsummit.com.tr'], 
  },
}

module.exports = nextConfig
