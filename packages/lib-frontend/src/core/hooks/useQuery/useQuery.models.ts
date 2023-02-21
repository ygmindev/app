import type {
  _UseQueryModel,
  _UseQueryParamsModel,
} from '@lib/frontend/core/hooks/useQuery/_useQuery.models';

export interface UseQueryParamsModel<TType> extends _UseQueryParamsModel<TType> {}

export interface UseQueryModel<TType> extends _UseQueryModel<TType> {}
