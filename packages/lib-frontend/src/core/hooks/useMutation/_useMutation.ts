import type {
  _UseMutationParamsModel,
  _UseMutationResultModel,
} from '@lib/frontend/core/hooks/useMutation/_useMutation.models';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const _useMutation = <TParams = undefined, TResult = void>({
  id,
  mutate: mutateParams,
}: _UseMutationParamsModel<TParams, TResult>): _UseMutationResultModel<TParams, TResult> => {
  const queryClient = useQueryClient();

  const { data, isError, isLoading, mutate } = useMutation([id], mutateParams, {
    onMutate: async () => {
      await queryClient.cancelQueries([id]);
    },
  });

  return {
    data,
    id,
    isError,
    isLoading,
    mutate: async (data) => mutate(data),
  };
};
