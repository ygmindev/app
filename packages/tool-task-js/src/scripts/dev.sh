#!/bin/bash

run orchestratorBuild

run executeParallel --commands=\
"run orchestratorRun",\
"run nodeDev --app=@service/orchestrator".\
"run nodeDev --app=@app/web-orchestrator"


# "run workerRun --count=3",\
