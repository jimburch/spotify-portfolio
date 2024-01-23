/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.contentful.com", "images.ctfassets.net"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
