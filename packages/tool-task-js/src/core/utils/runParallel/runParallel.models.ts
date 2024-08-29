import {
  type _RunParallelModel,
  type _RunParallelParamsModel,
} from '@tool/task/core/utils/runParallel/_runParallel.models';
import { type PARALLEL_CONDITION } from '@tool/task/core/utils/runParallel/runParallel.constants';

export type RunParallelParamsModel = _RunParallelParamsModel;

export type RunParallelModel = _RunParallelModel;

export type ParallelConditionModel = `${PARALLEL_CONDITION}`;

export type ParallelOptionsModel = { condition?: ParallelConditionModel; silent?: Array<number> };
