import { _runParallel } from '@tool/task/core/utils/runParallel/_runParallel';
import {
  type RunParallelModel,
  type RunParallelParamsModel,
} from '@tool/task/core/utils/runParallel/runParallel.models';

export const runParallel = async (...params: RunParallelParamsModel): Promise<RunParallelModel> =>
  _runParallel(...params);
