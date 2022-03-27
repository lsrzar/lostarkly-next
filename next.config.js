/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self'; font-src 'self' 'https://fonts.googleapis.com'; img-src 'self' *.somewhere.com; script-src 'self'",
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: "camera=(); battery=(self); geolocation=(); microphone=('https://somewhere.com')",
  },
  {
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
  },
];

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "preview" ||
      process.env.NODE_ENV === "production",
    // delete two lines above to enable PWA in production deployment
    // add your own icons to public/manifest.json
    // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
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
  future: { webpack5: true },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  }
};
