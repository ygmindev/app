import { config } from '#lib-config/data/query/query';
import { _useQuery } from '#lib-frontend/data/hooks/useQuery/_useQuery';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';

export const useQuery = <TType,>(
  ...[id, callback, options]: UseQueryParamsModel<TType>
): UseQueryModel<TType> => {
  const cache = options?.cache;
  const cacheF = (cache === true ? config.cacheTime : cache) || config.cacheTimeDefault;
  return _useQuery(id, callback, { ...options, cache: cacheF });
};
