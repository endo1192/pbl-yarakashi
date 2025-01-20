import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler:{
    styledComponents: true,
  },
};

module.exports = {
  experimental: {
    appDir: true, 
  },
  output: 'standalone',
};


export default nextConfig;
