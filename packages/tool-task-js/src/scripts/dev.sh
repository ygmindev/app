#!/bin/bash

run executeParallel \
--commands="run pubSubRun" \
--commands="run orchestratorRun" \
--commands="run serverDev --app=@service/orchestrator --pathname=src/index.ts --pathname=src/worker.ts" \
--commands="run serverDev --app=@app/web-orchestrator --pathname=src/index.ts"
