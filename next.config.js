/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.simplifyingthemarket.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "simplifyingthemarket.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.simplifyingthemarket.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.kcmteam.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "files.keepingcurrentmatters.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.keepingcurrentmatters.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
