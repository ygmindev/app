import { _mapParallel } from '@tool/task/core/utils/mapParallel/_mapParallel';
import {
  type MapParallelModel,
  type MapParallelParamsModel,
} from '@tool/task/core/utils/mapParallel/mapParallel.models';

export const mapParallel = async (...params: MapParallelParamsModel): Promise<MapParallelModel> =>
  _mapParallel(...params);
