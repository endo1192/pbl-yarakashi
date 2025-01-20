import type { NextConfig } from "next";
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  output: 'standalone',
  webpack(config, { isServer }) {
    if (!isServer) {
      // クライアントサイドのビルド最適化
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 25000000, // 25MBの制限を超えないように設定
      };
    }
    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
