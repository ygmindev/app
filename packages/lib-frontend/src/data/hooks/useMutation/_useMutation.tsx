import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  type _UseMutationModel,
  type _UseMutationParamsModel,
} from '#lib-frontend/data/hooks/useMutation/_useMutation.models';

export const _useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback]: _UseMutationParamsModel<TParams, TResult>
): _UseMutationModel<TParams, TResult> => {
  const queryClient = useQueryClient();
  const { data, mutate } = useMutation({
    mutationFn: callback,
    mutationKey: [id],
    onMutate: async () => queryClient.cancelQueries({ queryKey: [id] }),
  });
  return {
    data,
    id,
    mutate: async (data) => mutate(data),
  };
};
