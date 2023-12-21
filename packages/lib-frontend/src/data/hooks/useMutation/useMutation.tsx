import { _useMutation } from '#lib-frontend/data/hooks/useMutation/_useMutation';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import { useStore } from '#lib-frontend/state/hooks/useStore/useStore';

export const useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: UseMutationParamsModel<TParams, TResult>
): UseMutationModel<TParams, TResult> => {
  const [, isLoadingSet] = useStore('app.isLoading');
  return _useMutation<TParams, TResult>(
    id,
    options?.isBlocking
      ? async () => {
          isLoadingSet(true);
          const result = await callback();
          isLoadingSet(false);
          return result;
        }
      : callback,
    options,
  );
};
