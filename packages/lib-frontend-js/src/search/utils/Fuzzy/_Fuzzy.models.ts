import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _FuzzyParamsModel<TType extends WithIdModel> = {
  keys?: Array<string>;
  options: Array<TType>;
};

export type _FuzzyModel<TType extends WithIdModel> = {
  search(query: string, params: { limit?: number }): Promise<Array<TType>>;
};
