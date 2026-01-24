import { EXECUTE_PARALLEL } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';
import { type ExecuteParallelParamsModel } from '@tool/task/core/tasks/executeParallel/executeParallel.models';
import { APP_DEV } from '@tool/task/dev/workflows/appDev/appDev.constants';
import { type AppDevParamsModel } from '@tool/task/dev/workflows/appDev/appDev.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const appDev: BuildWorkflowParamsModel<
  AppDevParamsModel,
  void,
  [ExecuteParallelParamsModel]
> = {
  name: APP_DEV,

  steps: ({ name }, context) => [
    {
      name: EXECUTE_PARALLEL,
      params: {
        commands: [
          `run serverDev --app=@service/${name} --pathname=src/index.ts`,
          `run serverDev --app=@app/web-${name} --pathname=src/index.ts`,
        ],
      },
    },
  ],
};
