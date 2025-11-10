#!/bin/bash

run executeParallel --commands=\
"run orchestratorRun",\
"run tasksBuild",\
"run workerRun"
