import groupBy from 'lodash/groupBy';

import {
  type _GroupByModel,
  type _GroupByParamsModel,
} from '#lib-shared/core/utils/groupBy/_groupBy.models';

export const _groupBy = <TType>(
  ...[value, by, { isSort } = { isSort: true }]: _GroupByParamsModel<TType>
): _GroupByModel<TType> => {
  const valueF = groupBy(value, by);
  return isSort
    ? Object.keys(valueF)
        .sort()
        .reduce((result, k) => ({ ...result, [k]: valueF[k] }), {} as _GroupByModel<TType>)
    : valueF;
};
