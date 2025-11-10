import {
  type _ExecuteParallelModel,
  type _ExecuteParallelParamsModel,
} from '@tool/task/core/tasks/executeParallel/_executeParallel.models';
import { type PARALLEL_CONDITION } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';

export type ExecuteParallelParamsModel = _ExecuteParallelParamsModel;

export type ExecuteParallelModel = _ExecuteParallelModel;

export type ParallelOptionsModel = {
  condition?: PARALLEL_CONDITION;
  root?: string;
  silent?: Array<number>;
};
