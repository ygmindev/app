import type {
  _GroupByModel,
  _GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/_groupBy.models';
import groupBy from 'lodash/groupBy';

export const _groupBy = <TType>({
  by,
  isSort = true,
  value = [],
}: _GroupByParamsModel<TType>): _GroupByModel<TType> => {
  let _result = groupBy(value, by);
  _result = isSort
    ? Object.keys(_result)
        .sort()
        .reduce((result, k) => ({ ...result, [k]: _result[k] }), {} as _GroupByModel<TType>)
    : _result;
  return _result;
};
