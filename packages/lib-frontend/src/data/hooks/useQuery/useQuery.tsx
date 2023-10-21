import { config } from '#lib-config/data/query/query';
import { _useQuery } from '#lib-frontend/data/hooks/useQuery/_useQuery';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';

export const useQuery = <TType,>(
  ...[id, callback, options]: UseQueryParamsModel<TType>
): UseQueryModel<TType> => {
  const actions = useActions();
  const cache = options?.cache;
  const cacheF = (cache === true ? config.cacheTime : cache) ?? config.cacheTimeDefault;
  return _useQuery(
    id,
    options?.isBlocking
      ? async () => {
          actions?.app.isLoadingSet(true);
          const result = await callback();
          actions?.app.isLoadingSet(false);
          return result;
        }
      : callback,
    { ...options, cache: cacheF },
  );
};
