#!/bin/bash

run executeParallel \
--commands="run serverDev --app=@service/kfn --pathname=src/index.ts" \
--commands="run serverDev --app=@app/web-kfn --pathname=src/index.ts"
