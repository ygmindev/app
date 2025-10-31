#!/usr/bin/env bash
docker compose --env-file .env.public up -d --build
docker compose --env-file .env.public exec dev bash
