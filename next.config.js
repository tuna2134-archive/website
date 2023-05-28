/** @type {import('next').NextConfig} */
const nextConfig = {}

if (process.env.BUILD_TYPE === "standalone") {
  nextConfig.output = "standalone";
}

module.exports = nextConfig
