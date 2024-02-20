const { headers } = require("next/headers");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  async headers() {
    return [
      {
        source: "/api/login",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "",
          },
        ],
      },
    ];
  },
};
