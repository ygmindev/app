import { _useMutation } from '#lib-frontend/data/hooks/useMutation/_useMutation';
import {
  type UseMutationModel,
  type UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/useMutation.models';
import { useActions } from '#lib-frontend/state/hooks/useActions/useActions';

export const useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: UseMutationParamsModel<TParams, TResult>
): UseMutationModel<TParams, TResult> => {
  const actions = useActions();
  return _useMutation<TParams, TResult>(
    id,
    options?.isBlocking
      ? async () => {
          actions?.app.isLoadingSet(true);
          const result = await callback();
          actions?.app.isLoadingSet(false);
          return result;
        }
      : callback,
    options,
  );
};
