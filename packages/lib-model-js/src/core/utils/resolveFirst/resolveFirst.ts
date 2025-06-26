import {
  type ResolveFirstModel,
  type ResolveFirstParamsModel,
} from '@lib/shared/core/utils/resolveFirst/resolveFirst.models';

export const resolveFirst = async <TType extends unknown>(
  params: ResolveFirstParamsModel<TType>,
): Promise<ResolveFirstModel<TType>> => {
  const errors = [];
  for (const promise of params ?? []) {
    try {
      const result = await promise();
      if (result) {
        return result;
      }
    } catch (error) {
      errors.push(error);
    }
  }
  throw new Error(errors.join('\n'));
};
