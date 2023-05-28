/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.BUILD_TYPE === "edge") {
  nextConfig.output = "edge";
}

module.exports = nextConfig
