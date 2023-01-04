import type {
  _UseSearchModel,
  _UseSearchParamsModel,
} from '@lib/frontend/core/hooks/useSearch/_useSearch.models';

export interface UseSearchParamsModel<TType> extends _UseSearchParamsModel<TType> {}

export interface UseSearchModel<TType> extends _UseSearchModel<TType> {}