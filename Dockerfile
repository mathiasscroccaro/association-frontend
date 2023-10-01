FROM oven/bun:latest as builder

WORKDIR /app
COPY . .
RUN bun install
RUN bunx --bun vite build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]