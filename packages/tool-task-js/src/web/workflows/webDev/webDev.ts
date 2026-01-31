import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { EXECUTE_PARALLEL } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';
import { type ExecuteParallelParamsModel } from '@tool/task/core/tasks/executeParallel/executeParallel.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import { WEB_DEV } from '@tool/task/web/workflows/webDev/webDev.constants';
import { type WebDevParamsModel } from '@tool/task/web/workflows/webDev/webDev.models';

export const webDev: BuildWorkflowParamsModel<
  WebDevParamsModel,
  void,
  [ExecuteParallelParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
    overrrides: {
      ENV_PLATFORM: PLATFORM.WEB,
    },
  },

  name: WEB_DEV,

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
