#!/bin/bash

# cd packages/tool-cli
# pnpm link --global

run executeParallel --commands=\
"run orchestratorRun",\
"run tasksBuild",\
"run workerRun"

# "run clientRun --workflow=serverDev --app=app-web-orchestrator-js",\
# "run clientRun --workflow=serverDev --app=service-orchestrator-js"
