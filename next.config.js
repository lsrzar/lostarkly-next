/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' umami.sznm.dev;
  frame-src giscus.app;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/;
  img-src * blob: data: *.freepik.com;
  media-src 'none';
  connect-src *;
  font-src 'self' https://fonts.gstatic.com/;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=()",
  },
];

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === "development",
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
});

// next.config.js
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  future: { webpack5: true },
  headers: async() => {
    return [
      {
        source: "/",
        headers: securityHeaders,
      },
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      }
    ]
  }
};
