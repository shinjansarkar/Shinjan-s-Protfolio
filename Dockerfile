# Stage 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json yarn.lock* pnpm-lock.yaml* ./

# Install dependencies with fallback
RUN if [ -f package-lock.json ]; then npm ci --prefer-offline;     elif [ -f yarn.lock ]; then yarn install --frozen-lockfile;     elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile;     else npm install; fi

# Copy all source files
COPY . .

# Build for production
RUN npm run build

# Stage 2: Nginx Runtime
FROM nginx:alpine

# Copy custom nginx config (EXTERNAL FILE)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from builder
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3   CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Run as non-root user
USER nginx

CMD ["nginx", "-g", "daemon off;"]