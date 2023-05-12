import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import type { MergeParamsModel } from '@lib/shared/core/utils/merge/merge.models';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import mergeWith from 'lodash/mergeWith';
import uniq from 'lodash/uniq';

export const merge = <TType, TResult = TType>(
  ...[values, strategy = MERGE_STRATEGY.DEEP]: MergeParamsModel<TType>
): TResult =>
  mergeWith({}, ...values, (x: unknown, y: unknown) => {
    switch (strategy) {
      case MERGE_STRATEGY.DEEP:
        return isPlainObject(x) && isPlainObject(y)
          ? merge([x, y], strategy)
          : x === undefined
          ? y
          : x;
      case MERGE_STRATEGY.DEEP_APPEND:
      case MERGE_STRATEGY.DEEP_PREPEND:
        return isArray(x) && isArray(y)
          ? uniq(strategy === MERGE_STRATEGY.DEEP_APPEND ? [...y, ...x] : [...x, ...y])
          : isPlainObject(x) && isPlainObject(y)
          ? merge([x, y], strategy)
          : x === undefined
          ? y
          : x;
      default:
        return x === undefined ? y : x;
    }
  });
