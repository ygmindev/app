#!/bin/bash

run orchestratorBuild

run executeParallel --commands=\
"run pubSubRun",\
"run orchestratorRun",\
"run workerRun",\
"run nodeDev --app=@service/orchestrator",\
"run nodeDev --app=@app/web-orchestrator"
