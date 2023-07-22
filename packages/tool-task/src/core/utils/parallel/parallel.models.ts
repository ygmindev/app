import {
  type _ParallelModel,
  type _ParallelParamsModel,
} from '#tool-task/core/utils/parallel/_parallel.models';
import { type PARALLEL_CONDITION } from '#tool-task/core/utils/parallel/parallel.constants';

export type ParallelParamsModel = _ParallelParamsModel;

export type ParallelModel = _ParallelModel;

export type ParallelConditionModel = `${PARALLEL_CONDITION}`;
