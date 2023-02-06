import { _groupBy } from '@lib/shared/core/utils/groupBy/_groupBy';
import type {
  GroupByModel,
  GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/groupBy.models';

export const groupBy = <TType>({ ...params }: GroupByParamsModel<TType>): GroupByModel<TType> =>
  _groupBy({ ...params });
