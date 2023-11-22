import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/_useQuery.models';

export type UseQueryParamsModel<TParams = undefined, TResult = void> = _UseQueryParamsModel<
  TParams,
  TResult
>;

export type UseQueryModel<TParams = undefined, TResult = void> = _UseQueryModel<TParams, TResult>;
