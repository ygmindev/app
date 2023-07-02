import { config } from '#lib-config/data/query/query';
import { _useQuery } from '#lib-frontend/data/hooks/useQuery/_useQuery';
import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '#lib-frontend/data/hooks/useQuery/useQuery.constants';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';

export const useQuery = <TType,>(
  ...[id, callback, options]: UseQueryParamsModel<TType>
): UseQueryModel<TType> => {
  const cache = options?.cache;
  const cacheF =
    (cache === true ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT : cache) || config.cacheTime;
  return _useQuery(id, callback, { ...options, cache: cacheF });
};
