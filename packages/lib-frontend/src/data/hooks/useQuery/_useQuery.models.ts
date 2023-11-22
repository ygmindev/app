import { type AsyncPropsModel } from '#lib-frontend/data/data.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type _UseQueryOptionsModel<TParams = undefined> = AsyncPropsModel & {
  cache?: boolean | number;
  defaultParams?: TParams;
};

export type _UseQueryParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  query: (params?: TParams) => Promise<TResult | null>,
  options?: _UseQueryOptionsModel<TParams>,
];

export type _UseQueryModel<TParams = undefined, TResult = void> = WithIdModel & {
  data?: TResult | null;
  paramsSet(params?: TParams): void;
  query(): Promise<TResult | null>;
};
