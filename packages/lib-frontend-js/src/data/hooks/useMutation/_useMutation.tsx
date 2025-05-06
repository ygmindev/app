import {
  type _UseMutationModel,
  type _UseMutationParamsModel,
} from '@lib/frontend/data/hooks/useMutation/_useMutation.models';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

export const _useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: _UseMutationParamsModel<TParams, TResult>
): _UseMutationModel<TParams, TResult> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, mutate } = useMutation({
    gcTime: cache,
    mutationFn: callback,
    mutationKey: [id],
    onMutate: async () => queryClient.cancelQueries({ queryKey: [id] }),
    retry: false,
  });
  return {
    data,
    id,
    mutate: async (params) => mutate(params),
    reset: async () => {
      void queryClient.invalidateQueries({ queryKey: [id] });
    },
    setData: async (values) => {
      queryClient.setQueryData([id], values as never);
    },
  };
};
