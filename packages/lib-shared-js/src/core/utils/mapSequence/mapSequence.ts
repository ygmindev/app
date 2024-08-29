import {
  type MapSequenceModel,
  type MapSequenceParamsModel,
} from '@lib/shared/core/utils/mapSequence/mapSequence.models';

export const mapSequence = async <TType extends unknown>(
  params: MapSequenceParamsModel<TType>,
): Promise<MapSequenceModel<TType>> => {
  if (params.length === 0) return [];
  const [first, ...rest] = params;
  return [await first(), ...(await mapSequence(rest))];
};
