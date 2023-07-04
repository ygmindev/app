import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

export const sequence = async <TType>(
  promises: Array<OptionalCallablePromiseModel<TType>>,
): Promise<Array<TType>> => {
  if (promises.length === 0) return [];
  const [first, ...rest] = promises;
  return [await first(), ...(await sequence(rest))];
};
