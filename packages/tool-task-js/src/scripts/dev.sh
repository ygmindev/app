#!/bin/bash

run orchestratorBuild

run executeParallel --commands=\
"run workerRun",\
"run orchestratorRun",\
"run nodeDev --app=@service/orchestrator".\
"run nodeDev --app=@app/web-orchestrator"
