/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/valentines.git/' : '',
  basePath: isProd ? '/valentines.gite' : '',
  output: 'export'
};
export default nextConfig;
