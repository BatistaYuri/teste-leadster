/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/pt",
        locale: false,
      },
    ];
  },
};
const withNextIntl = require("next-intl/plugin")("./i18n.js");
module.exports = withNextIntl(nextConfig);
