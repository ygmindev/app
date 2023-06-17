import type {
  _UseQueryModel,
  _UseQueryParamsModel,
} from '#lib-frontend/core/hooks/useQuery/_useQuery.models';

export type UseQueryParamsModel<TType> = {
  cache?: number | boolean;
} & Omit<_UseQueryParamsModel<TType>, 'cache'>;

export type UseQueryModel<TType> = _UseQueryModel<TType>;
