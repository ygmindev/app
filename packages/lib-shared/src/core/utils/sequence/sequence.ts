import {
  type SequenceModel,
  type SequenceParamsModel,
} from '#lib-shared/core/utils/sequence/sequence.models';

export const sequence = async <TType>(
  params: SequenceParamsModel<TType>,
): Promise<SequenceModel<TType>> => {
  if (params.length === 0) return [];
  const [first, ...rest] = params;
  return [await first(), ...(await sequence(rest))];
};
