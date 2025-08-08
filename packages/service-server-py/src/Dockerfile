ARG PYTHON_VERSION=3.12.6

FROM python:${PYTHON_VERSION}-slim

ARG WORKING_DIR=packages/service-server-py
ARG TARGET_DIR=/app

ENV POETRY_VERSION=2.1.3 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_CREATE=false \
    PYTHONUNBUFFERED=1

RUN apt-get update \
    && apt-get install -y \
    curl \
    build-essential \
    gcc \
    libffi-dev \
    python3-dev \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*


RUN curl -sSL https://install.python-poetry.org | python3 \
    && ln -s /opt/poetry/bin/poetry /usr/local/bin/poetry

COPY packages/lib-ai-py ${TARGET_DIR}/packages/lib-ai-py
COPY packages/lib-config-py ${TARGET_DIR}/packages/lib-config-py
COPY packages/lib-model-py ${TARGET_DIR}/packages/lib-model-py
COPY packages/lib-shared-py ${TARGET_DIR}/packages/lib-shared-py
COPY packages/lib-quant-py ${TARGET_DIR}/packages/lib-quant-py
COPY packages/service-server-py/pyproject.toml ${TARGET_DIR}/packages/service-server-py/
COPY packages/service-server-py/poetry.lock ${TARGET_DIR}/packages/service-server-py/

WORKDIR ${TARGET_DIR}/packages/service-server-py

RUN poetry install --no-interaction --no-root

COPY packages/service-server-py ${TARGET_DIR}/packages/service-server-py

CMD ["poetry", "run", "python", "./src/test.py"]
