ARG NODE_VERSION=22
ARG SERVER_APP_PORT

FROM node:${NODE_VERSION}-slim

ENV NODE_RUNTIME=CONTAINER

RUN npm install -g pnpm

ARG TARGET_DIR=/app
RUN mkdir -p ${TARGET_DIR}

COPY package.json ${TARGET_DIR}
COPY patches ${TARGET_DIR}/patches
COPY pnpm-lock.yaml ${TARGET_DIR}
COPY pnpm-workspace.yaml ${TARGET_DIR}
COPY tsconfig.json ${TARGET_DIR}

COPY packages/asset-static ${TARGET_DIR}/packages/asset-static
COPY packages/lib-backend-js ${TARGET_DIR}/packages/lib-backend-js
COPY packages/lib-config-js ${TARGET_DIR}/packages/lib-config-js
COPY packages/lib-frontend-js ${TARGET_DIR}/packages/lib-frontend-js
COPY packages/lib-model-js ${TARGET_DIR}/packages/lib-model-js
COPY packages/lib-shared-js ${TARGET_DIR}/packages/lib-shared-js
COPY packages/service-orchestrator-js ${TARGET_DIR}/packages/service-orchestrator-js

WORKDIR ${TARGET_DIR}

WORKDIR ${TARGET_DIR}/packages/service-orchestrator-js
RUN pnpm install --frozen-lockfile

EXPOSE ${SERVER_APP_PORT}

CMD ["node", "__build__/index.js"]
