import { _executeParallel } from '@tool/task/core/tasks/executeParallel/_executeParallel';
import {
  type ExecuteParallelModel,
  type ExecuteParallelParamsModel,
} from '@tool/task/core/tasks/executeParallel/executeParallel.models';

export const executeParallel = async (
  params: ExecuteParallelParamsModel,
): Promise<ExecuteParallelModel> => _executeParallel(params);
