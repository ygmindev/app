import {
  type _mapMapParallelModel,
  type _mapMapParallelParamsModel,
} from '@tool/task/core/utils/mapParallel/_mapParallel.models';
import { type PARALLEL_CONDITION } from '@tool/task/core/utils/mapParallel/mapParallel.constants';

export type MapParallelParamsModel = _mapMapParallelParamsModel;

export type MapParallelModel = _mapMapParallelModel;

export type ParallelConditionModel = `${PARALLEL_CONDITION}`;

export type ParallelOptionsModel = { condition?: ParallelConditionModel; silent?: Array<number> };
