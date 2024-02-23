const { headers } = require("next/headers");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);

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
