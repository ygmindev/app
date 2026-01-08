ARG NODE_VERSION=22
ARG PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

FROM node:${NODE_VERSION}-slim

RUN apk add --no-cache \
    ca-certificates \
    && rm -rf /var/cache/apk/*

ENV NODE_RUNTIME=CONTAINER

RUN npm install -g pnpm

ARG TARGET_DIR=/app

COPY __dist__ ${TARGET_DIR}/__dist__
COPY package.json ${TARGET_DIR}
COPY patches ${TARGET_DIR}/patches
COPY pnpm-lock.yaml ${TARGET_DIR}
COPY pnpm-workspace.yaml ${TARGET_DIR}
COPY tsconfig.json ${TARGET_DIR}

COPY packages/lib-backend-js ${TARGET_DIR}/packages/lib-backend-js
COPY packages/lib-config-js ${TARGET_DIR}/packages/lib-config-js
COPY packages/lib-frontend-js ${TARGET_DIR}/packages/lib-frontend-js
COPY packages/lib-model-js ${TARGET_DIR}/packages/lib-model-js
COPY packages/lib-shared-js ${TARGET_DIR}/packages/lib-shared-js
COPY packages/service-job-js ${TARGET_DIR}/packages/service-job-js
COPY packages/service-job-js/src/entrypoint.sh ${TARGET_DIR}/packages/service-job-js/src/entrypoint.sh


CMD ["node", "src/server.js"]




FROM node:20-slim AS base
ENV DIR=/app
WORKDIR $DIR
# Install dependencies only when package.json changes
COPY package*.json $DIR/

# --- Stage 2: Dependencies ---
FROM base AS build
RUN npm ci

# --- Stage 3: Production ---
FROM base AS production
ENV NODE_ENV=production
# Only install production dependencies
RUN npm ci --omit=dev
# Copy source code
COPY . .
EXPOSE 3000
CMD ["node", "src/server.js"]

# --- Stage 4: Development ---
FROM build AS dev
ENV NODE_ENV=development
# Install nodemon for hot-reloading
RUN npm install -g nodemon
COPY . .
CMD ["nodemon", "src/server.js"]