import {
  type MapParallelModel,
  type MapParallelParamsModel,
} from '@lib/shared/core/utils/mapParallel/mapParallel.models';

export const mapParallel = async <TType extends unknown>(
  params: MapParallelParamsModel<TType>,
): Promise<MapParallelModel<TType>> => {
  if (params.length === 0) return [];
  const [first, ...rest] = params;
  return [await first(), ...(await mapParallel(rest))];
};
