FROM --platform=linux/amd64 public.ecr.aws/lambda/nodejs:18

WORKDIR ${LAMBDA_TASK_ROOT}

ADD _build/layers/nodejs ./
ADD src/functions ${LAMBDA_TASK_ROOT}/src/functions
