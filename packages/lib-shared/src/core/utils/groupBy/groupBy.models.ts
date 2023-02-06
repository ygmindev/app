import type {
  _GroupByModel,
  _GroupByParamsModel,
} from '@lib/shared/core/utils/groupBy/_groupBy.models';

export interface GroupByParamsModel<TType> extends _GroupByParamsModel<TType> {}

export type GroupByModel<TType> = _GroupByModel<TType>;
