import {
  type _GroupByModel,
  type _GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/_groupBy.models';
import { sort } from '@lib/shared/core/utils/sort/sort';
import groupBy from 'lodash/groupBy';

export const _groupBy = <TType extends unknown>(
  ...[value, by, { isSort } = { isSort: true }]: _GroupByParamsModel<TType>
): _GroupByModel<TType> => {
  const valueF = groupBy(value, by);
  return isSort
    ? sort(Object.keys(valueF)).reduce(
        (result, k) => ({ ...result, [k]: valueF[k] }),
        {} as _GroupByModel<TType>,
      )
    : valueF;
};
