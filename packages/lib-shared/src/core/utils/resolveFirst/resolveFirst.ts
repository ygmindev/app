import type {
  ResolveFirstModel,
  ResolveFirstParamsModel,
} from '@lib/shared/core/utils/resolveFirst/resolveFirst.models';

export const resolveFirst = async <TType>(
  params: ResolveFirstParamsModel<TType>,
): ResolveFirstModel<TType> => {
    const _errors = [];
    for (const promise of (params || [])) {
      try {
        const _result = await promise();
        if (_result) {
          return _result;
        }
      } catch (error) {
        _errors.push(error);
      }
    }
    throw new Error();
  };
