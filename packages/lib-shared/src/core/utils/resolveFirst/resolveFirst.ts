import type {
  ResolveFirstModel,
  ResolveFirstParamsModel,
} from '@lib/shared/core/utils/resolveFirst/resolveFirst.models';

export const resolveFirst = async <TType>(
  params: ResolveFirstParamsModel<TType>,
): ResolveFirstModel<TType> =>
  (params || []).reduce(
    (result, promise) => result.catch(() => promise()),
    Promise.reject<TType>(),
  );
