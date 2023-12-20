import { config } from '#lib-config/data/query/query';
import { _useQuery } from '#lib-frontend/data/hooks/useQuery/_useQuery';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';

export const useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: UseQueryParamsModel<TParams, TResult>
): UseQueryModel<TResult> => {
  const actions = useActions();
  const cache = options?.cache;
  const cacheF = (cache === true ? config.cacheTime : cache) ?? config.cacheTimeDefault;
  return _useQuery(
    id,
    options?.isBlocking
      ? async () => {
          actions?.app.isLoading(true);
          const result = await callback();
          actions?.app.isLoading(false);
          return result;
        }
      : callback,
    { ...options, cache: cacheF },
    params,
  );
};
