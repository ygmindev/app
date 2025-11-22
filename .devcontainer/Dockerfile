ARG NODE_VERSION
ARG PYTHON_VERSION

FROM --platform=linux/amd64 node:${NODE_VERSION}-bullseye-slim

ARG PNPM_VERSION

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV SHELL=/bin/bash

RUN corepack enable && \
    corepack prepare pnpm@${PNPM_VERSION} --activate && \
    pnpm setup

WORKDIR /workspace

COPY .npmrc \
    eslint.config.mjs \
    package.json \
    pnpm-lock.yaml \
    pnpm-workspace.yaml \
    tsconfig.json \
    ./

COPY patches ./patches    
COPY packages ./packages

RUN pnpm install --frozen-lockfile && \
    pnpm add @swc/core-linux-arm64-gnu && \
    pnpm rebuild @swc/core && \
    npm link && \
    run bct && \
    run bcl

CMD ["bash"]
