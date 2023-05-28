/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.BUILD_TYPE === "edge") {
  nextConfig.output = "edge";
  nextConfig.experimental = { runtime: 'edge'}
}

module.exports = nextConfig
