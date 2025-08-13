ARG NODE_VERSION=22
ARG PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

FROM node:${NODE_VERSION}-alpine

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ttf-freefont \
    libstdc++ \
    udev \
    gtk+3.0 \
    at-spi2-core \
    libx11 \
    libxcomposite \
    libxdamage \
    libxrandr \
    libxfixes \
    libxi \
    libxtst \
    mesa-gl \
    && rm -rf /var/cache/apk/*

ENV PUPPETEER_EXECUTABLE_PATH=${PUPPETEER_EXECUTABLE_PATH}
ENV PUPPETEER_SKIP_DOWNLOAD=true

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
COPY packages/service-job-js/__dist__ ${TARGET_DIR}/packages/service-job-js/__dist__
COPY packages/service-job-js/src/entrypoint.sh ${TARGET_DIR}/packages/service-job-js/src/entrypoint.sh

WORKDIR ${TARGET_DIR}

RUN pnpm install --frozen-lockfile

WORKDIR ${TARGET_DIR}/packages/service-job-js

RUN chmod +x ./src/entrypoint.sh
ENTRYPOINT ["./src/entrypoint.sh"]

