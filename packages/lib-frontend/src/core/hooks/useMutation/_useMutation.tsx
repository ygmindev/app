import type {
  _UseMutationModel,
  _UseMutationParamsModel,
} from '@lib/frontend/core/hooks/useMutation/_useMutation.models';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const _useMutation = <TParams = undefined, TResult = void>({
  id,
  mutate: _mutate,
}: _UseMutationParamsModel<TParams, TResult>): _UseMutationModel<TParams, TResult> => {
  const queryClient = useQueryClient();
  const { data, isError, isLoading, mutate } = useMutation([id], _mutate, {
    onMutate: async () => queryClient.cancelQueries([id]),
  });
  return {
    data,
    id,
    isError,
    isLoading,
    mutate: async (data) => mutate(data),
  };
};
