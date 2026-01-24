import { _executeParallel } from '@tool/task/core/tasks/executeParallel/_executeParallel';
import { EXECUTE_PARALLEL } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';
import {
  type ExecuteParallelModel,
  type ExecuteParallelParamsModel,
} from '@tool/task/core/tasks/executeParallel/executeParallel.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const executeParallel = buildTask<ExecuteParallelParamsModel, ExecuteParallelModel>({
  name: EXECUTE_PARALLEL,

  task: async (params, context): Promise<ExecuteParallelModel> =>
    _executeParallel({
      ...params,
      root: context?.root,
    }),
});
