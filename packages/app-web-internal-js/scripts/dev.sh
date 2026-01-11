#!/bin/bash

run executeParallel \
--commands="run serverDev --app=@service/internal --pathname=src/index.ts" \
--commands="run serverDev --app=@app/web-internal --pathname=src/index.ts"
