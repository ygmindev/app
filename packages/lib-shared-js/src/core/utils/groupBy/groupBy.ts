import { _groupBy } from '@lib/shared/core/utils/groupBy/_groupBy';
import {
  type GroupByModel,
  type GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/groupBy.models';

export const groupBy = <TType extends unknown>(
  ...params: GroupByParamsModel<TType>
): GroupByModel<TType> => _groupBy(...params);
