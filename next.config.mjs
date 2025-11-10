/** @type {import('next').NextConfig} */
const nextConfig = {
  // Thêm dòng quan trọng này:
  output: 'standalone', 
  
  // Các cấu hình khác của bạn (nếu có)...
  reactStrictMode: true,
};

export default nextConfig; // Hoặc module.exports = nextConfig;