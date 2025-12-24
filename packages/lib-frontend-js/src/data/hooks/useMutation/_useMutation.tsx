import {
  type _UseMutationModel,
  type _UseMutationParamsModel,
} from '@lib/frontend/data/hooks/useMutation/_useMutation.models';
import { useQueryClient } from '@lib/frontend/data/hooks/useQueryClient/useQueryClient';
import { useMutation } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

export const _useMutation = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: _UseMutationParamsModel<TParams, TResult>
): _UseMutationModel<TParams, TResult> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, isPending, mutate } = useMutation({
    gcTime: cache,
    mutationFn: callback,
    mutationKey: [id],
    onMutate: async () => queryClient.cancel([id]),
    retry: false,
  });
  return {
    data,
    id,
    isLoading: isPending,
    mutate: async (params) => mutate(params),
    reset: async () => {
      void queryClient.invalidate([id]);
    },
    setData: async (values) => {
      await queryClient.set([id], values);
    },
  };
};
