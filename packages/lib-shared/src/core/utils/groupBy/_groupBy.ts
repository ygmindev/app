import type {
  _GroupByModel,
  _GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/_groupBy.models';
import groupBy from 'lodash/groupBy';

export const _groupBy = <TType>(
  ...[value, by, { isSort } = { isSort: true }]: _GroupByParamsModel<TType>
): _GroupByModel<TType> => {
  const _result = groupBy(value, by);
  return isSort
    ? Object.keys(_result)
        .sort()
        .reduce((result, k) => ({ ...result, [k]: _result[k] }), {} as _GroupByModel<TType>)
    : _result;
};
