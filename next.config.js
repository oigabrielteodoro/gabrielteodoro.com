/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gabrielteodoro.cdn.prismic.io"],
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
};

module.exports = nextConfig;
