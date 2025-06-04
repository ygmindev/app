import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '@lib/frontend/data/hooks/useQuery/_useQuery.models';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

export const _useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, params, options]: _UseQueryParamsModel<TParams, TResult>
): _UseQueryModel<TResult> => {
  const idF = filterNil([id, params]);
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, isStale, refetch } = useSuspenseQuery<TResult | null, Error>({
    gcTime: cache,
    initialData: undefined,
    queryFn: () => callback(params),
    queryKey: idF,
    refetchOnMount: true,
    refetchOnReconnect: false,
    retry: false,
    staleTime: cache,
  });

  const refetchF = debounce(async () => refetch());
  const setData = async (values: TResult): Promise<void> => {
    queryClient.setQueryData(idF, values as never);
  };

  return {
    data,
    id,
    query: async () => (isStale ? (await refetchF())?.data : data) ?? null,
    reset: async () => {
      await queryClient.resetQueries({ queryKey: idF });
    },
    setData,
  };
};
