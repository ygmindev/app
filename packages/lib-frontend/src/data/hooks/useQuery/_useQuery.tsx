import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '@lib/frontend/data/hooks/useQuery/_useQuery.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

export const _useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: _UseQueryParamsModel<TParams, TResult>
): _UseQueryModel<TResult> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, isStale, refetch } = useSuspenseQuery<TResult | null, Error>({
    gcTime: cache,
    queryFn: () => callback(params),
    queryKey: [id, params],
    refetchOnMount: true,
    staleTime: cache,
  });
  const refetchF = debounce(async () => refetch());
  return {
    data,
    id,
    query: async () => (isStale ? (await refetchF())?.data : data) ?? null,
    reset: async () => {
      void queryClient.invalidateQueries({ queryKey: [id] });
    },
    setData: async (values) => queryClient.setQueryData([id, params], values as never),
  };
};
