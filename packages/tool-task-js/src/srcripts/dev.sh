#!/bin/bash

run tasksBuild

run executeParallel --commands=\
"run orchestratorRun",\
"run workerRun --count=2"
# "run clientRun --workflow=serverDev --app=service-orchestrator-js",\
# "run clientRun --workflow=serverDev --app=app-web-orchestrator-js"
