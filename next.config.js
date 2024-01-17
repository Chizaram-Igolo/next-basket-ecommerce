/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/product-images/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "http://localhost:3000/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://next-basket-five.vercel.app",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
