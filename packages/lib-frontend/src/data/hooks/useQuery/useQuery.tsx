import { config } from '#lib-config/data/query/query';
import { _useQuery } from '#lib-frontend/data/hooks/useQuery/_useQuery';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';

export const useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: UseQueryParamsModel<TParams, TResult>
): UseQueryModel<TResult> => {
  const [, isLoadingSet] = useStore('app.isLoading');
  const cache = options?.cache;
  const cacheF = (cache === true ? config.cacheTime : cache) ?? config.cacheTimeDefault;
  return _useQuery(
    id,
    options?.isBlocking
      ? async () => {
          isLoadingSet(true);
          const result = await callback();
          isLoadingSet(false);
          return result;
        }
      : callback,
    { ...options, cache: cacheF },
    params,
  );
};
