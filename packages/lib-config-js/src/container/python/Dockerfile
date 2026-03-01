ARG PYTHON_VERSION=3.12

FROM python:${PYTHON_VERSION}-slim

ENV TARGET_DIR=/app
ARG PKG_NAME
ARG SERVER_APP_PYTHON_PORT

ENV NODE_RUNTIME=CONTAINER
ENV PKG_NAME=${PKG_NAME}
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV SERVER_APP_PYTHON_PORT=${SERVER_APP_PYTHON_PORT}

WORKDIR ${TARGET_DIR}

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY packages/${PKG_NAME}/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get purge -y --auto-remove build-essential

COPY packages/lib-ai-py ${TARGET_DIR}/packages/lib-ai-py
COPY packages/lib-config-py ${TARGET_DIR}/packages/lib-config-py
COPY packages/lib-model-py ${TARGET_DIR}/packages/lib-model-py
COPY packages/lib-quant-py ${TARGET_DIR}/packages/lib-quant-py
COPY packages/lib-shared-py ${TARGET_DIR}/packages/lib-shared-py
COPY packages/${PKG_NAME} ${TARGET_DIR}/packages/${PKG_NAME}

ENV PYTHONPATH="${TARGET_DIR}:\
${TARGET_DIR}/packages/lib-ai-py/src:\
${TARGET_DIR}/packages/lib-config-py/src:\
${TARGET_DIR}/packages/lib-model-py/src:\
${TARGET_DIR}/packages/lib-quant-py/src:\
${TARGET_DIR}/packages/lib-shared-py/src"

WORKDIR ${TARGET_DIR}/packages/${PKG_NAME}

EXPOSE ${SERVER_APP_PYTHON_PORT}

ENV NODE_ENV=production

CMD ["python"]
