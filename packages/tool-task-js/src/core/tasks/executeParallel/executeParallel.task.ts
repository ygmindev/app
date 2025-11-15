import { _executeParallel } from '@tool/task/core/tasks/executeParallel/_executeParallel';
import {
  type ExecuteParallelModel,
  type ExecuteParallelParamsModel,
} from '@tool/task/core/tasks/executeParallel/executeParallel.models';
import { task } from '@tool/task/core/utils/task/task';

export const executeParallel = task({
  task: async (params: ExecuteParallelParamsModel): Promise<ExecuteParallelModel> =>
    _executeParallel(params),
});
