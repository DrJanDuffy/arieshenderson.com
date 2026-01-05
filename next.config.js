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
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/signin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/",
        permanent: true,
      },
      {
        source: "/error",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog-sidebar",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog-details",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
