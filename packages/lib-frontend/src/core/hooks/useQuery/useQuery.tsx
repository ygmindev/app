import { _useQuery } from '#lib-frontend/core/hooks/useQuery/_useQuery';
import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '#lib-frontend/core/hooks/useQuery/useQuery.constants';
import type {
  UseQueryModel,
  UseQueryParamsModel,
} from '#lib-frontend/core/hooks/useQuery/useQuery.models';

export const useQuery = <TType,>(
  ...[id, callback, options]: UseQueryParamsModel<TType>
): UseQueryModel<TType> => {
  const cache = options?.cache;
  const cacheF = (cache === true ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT : cache) || 0;
  return _useQuery(id, callback, { ...options, cache: cacheF });
};
