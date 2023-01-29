import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '@lib/frontend/core/hooks/useQuery/useQuery.constants';
import type {
  _UseQueryConnectionModel,
  _UseQueryConnectionParamsModel,
} from '@lib/frontend/core/hooks/useQueryConnection/_useQueryConnection.models';
import { USE_QUERY_CONNECTION_LIMIT_DEFAULT } from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import toNumber from 'lodash/toNumber';

export const _useQueryConnection = <TType, TError extends Error = Error>({
  cache,
  id,
  limit = USE_QUERY_CONNECTION_LIMIT_DEFAULT,
  query,
}: _UseQueryConnectionParamsModel<TType>): _UseQueryConnectionModel<TType, TError> => {
  const queryClient = useQueryClient();

  const cacheTime = cache
    ? cache === true
      ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT
      : toNumber(cache)
    : 0;

  const { data, error, fetchNextPage, isError, isFetching } = useInfiniteQuery<
    ConnectionModel<TType> | null,
    TError
  >([id], async ({ pageParam }) => query(pageParam), {
    cacheTime,
    getNextPageParam: (params) =>
      params && params.pageInfo.hasNextPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    getPreviousPageParam: (params) =>
      params && params.pageInfo.hasPreviousPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    staleTime: cacheTime,
  });

  const _fetchNextPage = debounce({ callback: fetchNextPage });

  return {
    data,
    error,
    id,
    isError,
    isLoading: isFetching,
    queryNext: async () => {
      await _fetchNextPage();
    },
    resetQuery: (id) => queryClient.invalidateQueries([id]),
    setQueryData: (id, data) => queryClient.setQueryData([id], data),
  };
};
