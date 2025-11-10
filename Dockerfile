# Giai đoạn 1: Build ứng dụng
FROM node:18-alpine AS builder

# Đặt biến môi trường
ENV NODE_ENV=production

WORKDIR /app

# Sao chép package.json và cài đặt dependencies
COPY package*.json ./
RUN npm ci

# Sao chép toàn bộ source code và build
COPY . .
RUN npm run build

# ---

# Giai đoạn 2: Tạo image chạy production
FROM node:20-alpine AS runner

WORKDIR /app

# Đặt biến môi trường
ENV NODE_ENV=production
# Bạn có thể đặt PORT ở đây nếu muốn
# ENV PORT=3000

# Sao chép bản build "standalone" từ giai đoạn 'builder'
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Mở cổng (mặc định Next.js chạy ở cổng 3000)
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["node", "server.js"]