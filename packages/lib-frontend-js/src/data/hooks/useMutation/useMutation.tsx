import queryConfig from '@lib/config/query/query';
import { useErrorContext } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext';
import { ERROR_TYPE } from '@lib/frontend/core/hooks/useErrorContext/useErrorContext.constants';
import { _useMutation } from '@lib/frontend/data/hooks/useMutation/_useMutation';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '@lib/frontend/data/hooks/useMutation/useMutation.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: UseMutationParamsModel<TParams, TResult>
): UseMutationModel<TParams, TResult> => {
  const { cacheTime, cacheTimeDefault } = queryConfig.params();
  const { handleError } = useErrorContext();
  const [_, isLoadingSet] = useStore('app.isLoading');
  const cache = options?.cache;
  const cacheF = (cache === true ? cacheTime : cache) ?? cacheTimeDefault;
  return _useMutation<TParams, TResult>(
    id,
    async (params) => {
      options?.isBlocking && isLoadingSet(true);
      try {
        return await callback(params);
      } catch (e) {
        handleError(e as Error, ERROR_TYPE.NOTIFICATION);
        return null;
      } finally {
        options?.isBlocking && isLoadingSet(false);
      }
    },
    { ...options, cache: cacheF },
  );
};
