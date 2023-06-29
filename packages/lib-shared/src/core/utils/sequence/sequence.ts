import { type CallablePromiseModel } from '#lib-shared/core/core.models';

export const sequence = async <TType>(
  promises: Array<CallablePromiseModel<TType>>,
): Promise<Array<TType>> => {
  if (promises.length === 0) return [];
  const [first, ...rest] = promises;
  return [await first(), ...(await sequence(rest))];
};
