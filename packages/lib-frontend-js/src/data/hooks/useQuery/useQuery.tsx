import queryConfig from '@lib/config/query/query';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { ERROR_TYPE } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.constants';
import { _useQuery } from '@lib/frontend/data/hooks/useQuery/_useQuery';
import {
  type UseQueryModel,
  type UseQueryParamsModel,
} from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, params, options]: UseQueryParamsModel<TParams, TResult>
): UseQueryModel<TResult> => {
  const { cacheTime, cacheTimeDefault } = queryConfig.params();
  const { handleError } = useErrorContext();
  const [, isLoadingSet] = useStore('app.isLoading');
  const cache = options?.cache;
  const cacheF = (cache === true ? cacheTime : cache) ?? cacheTimeDefault;
  return _useQuery(
    id,
    async () => {
      options?.isBlocking && isLoadingSet(true);
      try {
        await sleep(3000);
        return await callback(params);
      } catch (e) {
        handleError(e as Error, ERROR_TYPE.FALLBACK);
        return null;
      } finally {
        options?.isBlocking && isLoadingSet(false);
      }
    },
    params,
    { ...options, cache: cacheF },
  );
};
