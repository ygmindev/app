import {
  type _MapParallelModel,
  type _MapParallelParamsModel,
} from '@tool/task/core/utils/mapParallel/_mapParallel.models';
import { type PARALLEL_CONDITION } from '@tool/task/core/utils/mapParallel/mapParallel.constants';

export type MapParallelParamsModel = _MapParallelParamsModel;

export type MapParallelModel = _MapParallelModel;

export type ParallelConditionModel = `${PARALLEL_CONDITION}`;

export type ParallelOptionsModel = { condition?: ParallelConditionModel; silent?: Array<number> };
