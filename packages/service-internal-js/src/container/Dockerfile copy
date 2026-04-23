FROM node-base as node-server

ARG SERVER_APP_PORT

# COPY packages/service-orchestrator-js ${TARGET_DIR}/packages/service-orchestrator-js

# WORKDIR ${TARGET_DIR}/packages/service-orchestrator-js

EXPOSE ${SERVER_APP_PORT}

CMD ["node", "__build__/index.js"]
