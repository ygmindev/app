import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _UseSearchParamsModel<TType extends WithIdModel> = {
  delay?: number;
  items: Array<TType>;
  keys: Array<string>;
  limit?: number;
  onChange?(value: string): void;
};

export type _UseSearchModel<TResult> = {
  query?: string;
  result: Array<TResult>;
  search(query: string): void;
};
