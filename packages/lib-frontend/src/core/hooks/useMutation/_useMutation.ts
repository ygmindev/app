import type {
  _UseMutationParamsModel,
  _UseMutationResultModel,
} from '@lib/frontend/core/hooks/useMutation/_useMutation.models';
import { useAlert } from '@lib/frontend/notification/hooks/useAlert/useAlert';
import { UNKNOWN_ALERT } from '@lib/frontend/notification/notification.constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const _useMutation = <TParams = undefined, TResult = void, TError extends Error = Error>({
  id,
  mutate: mutateParams,
  onError,
  onStart,
  onSuccess,
}: _UseMutationParamsModel<TParams, TResult, TError>): _UseMutationResultModel<
  TParams,
  TResult,
  TError
> => {
  const { alertAdd } = useAlert();
  const queryClient = useQueryClient();

  const { data, error, isError, isLoading, mutate } = useMutation([id], mutateParams, {
    onError,
    onMutate: async () => {
      await queryClient.cancelQueries([id]);
      return onStart && onStart();
    },
    onSuccess,
  });

  if (error) {
    onError ? onError(error) : alertAdd(UNKNOWN_ALERT);
  }

  return {
    data,
    error,
    id,
    isError,
    isLoading,
    mutate: async (data) => mutate(data),
  };
};
