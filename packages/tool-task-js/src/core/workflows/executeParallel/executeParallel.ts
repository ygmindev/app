import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { EXECUTE_PARALLEL } from '@tool/task/core/workflows/executeParallel/executeParallel.constants';
import {
  type ExecuteParallelModel,
  type ExecuteParallelParamsModel,
} from '@tool/task/core/workflows/executeParallel/executeParallel.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const executeParallel: BuildWorkflowParamsModel<
  ExecuteParallelParamsModel,
  ExecuteParallelModel,
  [ExecuteParallelParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.DEVELOPMENT,
  },

  name: EXECUTE_PARALLEL,

  steps: (params) => [{ name: EXECUTE_PARALLEL, params }],
};
