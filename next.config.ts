import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler:{
    styledComponents: true,
  },
  output: 'standalone',
};


export default nextConfig;
