import { type AsyncPropsModel } from '@lib/frontend/data/data.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type _UseQueryOptionsModel = AsyncPropsModel & {
  cache?: boolean | number;
};

export type _UseQueryParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  query: (params?: TParams) => Promise<TResult | null>,
  options?: _UseQueryOptionsModel,
  params?: TParams,
];

export type _UseQueryModel<TResult = void> = WithIdModel & {
  data?: TResult | null;
  query(): Promise<TResult | null>;
  reset(): Promise<void>;
};
