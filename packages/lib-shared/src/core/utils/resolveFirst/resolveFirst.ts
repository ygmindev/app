import type {
  ResolveFirstModel,
  ResolveFirstParamsModel,
} from '#lib-shared/core/utils/resolveFirst/resolveFirst.models';

export const resolveFirst = async <TType>(
  params: ResolveFirstParamsModel<TType>,
): ResolveFirstModel<TType> => {
  const errors = [];
  for (const promise of params || []) {
    try {
      const result = await promise();
      if (result) {
        return result;
      }
    } catch (error) {
      errors.push(error);
    }
  }
  throw new Error();
};
