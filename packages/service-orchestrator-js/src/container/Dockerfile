ARG NODE_VERSION=22
ARG APP_PORT

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
COPY packages/service-orchestrator-js ${TARGET_DIR}/packages/service-orchestrator-js

WORKDIR ${TARGET_DIR}

RUN pnpm install --frozen-lockfile

WORKDIR ${TARGET_DIR}/packages/service-orchestrator-js

EXPOSE ${APP_PORT}

CMD ["node", "src/server.js"]
