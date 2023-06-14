import type {
  _UseQueryConnectionModel,
  _UseQueryConnectionParamsModel,
} from '#lib-frontend/core/hooks/useQueryConnection/_useQueryConnection.models';
import { USE_QUERY_CONNECTION_LIMIT_DEFAULT } from '#lib-frontend/core/hooks/useQueryConnection/useQueryConnection.constants';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';
import type { ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

export const _useQueryConnection = <TType,>({
  cache,
  id,
  limit = USE_QUERY_CONNECTION_LIMIT_DEFAULT,
  query,
}: _UseQueryConnectionParamsModel<TType>): _UseQueryConnectionModel<TType> => {
  const queryClient = useQueryClient();
  const { data, error, fetchNextPage, isError, isFetching } = useInfiniteQuery<
    ConnectionModel<TType> | null,
    Error
  >([id], async ({ pageParam }) => query(pageParam), {
    cacheTime: cache,
    getNextPageParam: (params) =>
      params && params.pageInfo.hasNextPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    getPreviousPageParam: (params) =>
      params && params.pageInfo.hasPreviousPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    staleTime: cache,
  });

  const fetchNextPageF = debounce(fetchNextPage);

  return {
    data,
    error,
    id,
    isError,
    isLoading: isFetching,
    queryNext: async () => {
      await fetchNextPageF();
    },
    resetQuery: (id) => queryClient.invalidateQueries([id]),
    setQueryData: (id, data) => queryClient.setQueryData([id], data),
  };
};
