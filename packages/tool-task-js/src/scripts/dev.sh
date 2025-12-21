#!/bin/bash

run executeParallel \
--commands="run pubSubRun" \
--commands="run orchestratorRun" \
--commands="run nodeDev --app=@service/orchestrator --pathname=src/index.ts --pathname=src/worker.ts" \
--commands="run nodeDev --app=@app/web-orchestrator --pathname=src/index.ts"
