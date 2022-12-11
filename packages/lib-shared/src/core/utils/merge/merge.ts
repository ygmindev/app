import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { MergeParamsModel } from '@lib/shared/core/utils/merge/merge.models';
import { isArray, isPlainObject, mergeWith, uniq } from 'lodash';

export const merge = <TType, TResult = TType>({
  strategy = MERGE_STRATEGY.DEEP,
  values,
}: MergeParamsModel<TType>): TResult =>
  mergeWith({}, ...values, (x: unknown, y: unknown) => {
    switch (strategy) {
      case MERGE_STRATEGY.DEEP:
        return isPlainObject(x) && isPlainObject(y)
          ? merge({ strategy, values: [x, y] })
          : x === undefined
          ? y
          : x;
      case MERGE_STRATEGY.DEEP_APPEND:
      case MERGE_STRATEGY.DEEP_PREPEND:
        return isArray(x) && isArray(y)
          ? uniq(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y])
          : isPlainObject(x) && isPlainObject(y)
          ? merge({ strategy, values: [x, y] })
          : x === undefined
          ? y
          : x;
      default:
        return x === undefined ? y : x;
    }
  });
