# syntax=docker/dockerfile:1

# ============================================================
# 1. Dependencies
# ============================================================

FROM node:22-alpine AS deps

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@11.18.0 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm install --frozen-lockfile


# ============================================================
# 2. Build
# ============================================================

FROM node:22-alpine AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

RUN corepack enable && \
    corepack prepare pnpm@11.18.0 --activate

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm run build


# ============================================================
# 3. Production
# ============================================================

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Static production server
RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]