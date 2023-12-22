import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import { ERROR_TYPE } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext.constants';
import { _useMutation } from '#lib-frontend/data/hooks/useMutation/_useMutation';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';

export const useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: UseMutationParamsModel<TParams, TResult>
): UseMutationModel<TParams, TResult> => {
  const { handleError } = useErrorContext();
  const [, isLoadingSet] = useStore('app.isLoading');
  return _useMutation<TParams, TResult>(
    id,
    async () => {
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
    options,
  );
};
