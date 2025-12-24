import { type _UseQueryClientModel } from '@lib/frontend/data/hooks/useQueryClient/_useQueryClient.models';
import { useQueryClient } from '@tanstack/react-query';

export const _useQueryClient = (): _UseQueryClientModel => {
  const queryClient = useQueryClient();
  return {
    cancel: async (id) => queryClient.cancelQueries({ queryKey: id }),

    invalidate: async (id) => queryClient.invalidateQueries({ queryKey: id }),

    set: async (id, value) => {
      await (value === undefined
        ? queryClient.resetQueries({ queryKey: id })
        : queryClient.setQueryData(id, value));
    },
  };
};
