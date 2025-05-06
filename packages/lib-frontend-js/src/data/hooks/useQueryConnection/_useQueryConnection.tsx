import {
  type _UseQueryConnectionModel,
  type _UseQueryConnectionParamsModel,
} from '@lib/frontend/data/hooks/useQueryConnection/_useQueryConnection.models';
import { USE_QUERY_CONNECTION_LIMIT_DEFAULT } from '@lib/frontend/data/hooks/useQueryConnection/useQueryConnection.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

export const _useQueryConnection = <TParams = undefined, TResult = void>(
  ...[id, callback, params, options]: _UseQueryConnectionParamsModel<TParams, TResult>
): _UseQueryConnectionModel<TResult> => {
  const limit = options?.limit || USE_QUERY_CONNECTION_LIMIT_DEFAULT;
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, fetchNextPage } = useInfiniteQuery<ConnectionModel<TResult> | null, Error>({
    gcTime: cache,
    getNextPageParam: (params) =>
      params && params.pageInfo.hasNextPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    getPreviousPageParam: (params) =>
      params && params.pageInfo.hasPreviousPage
        ? { after: params.pageInfo.endCursor, first: limit }
        : undefined,
    initialData: undefined,
    initialPageParam: {},
    queryFn: async ({ pageParam }) => callback(pageParam as PaginationModel),
    queryKey: [id, params],
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: cache,
  });

  const fetchNextPageF = debounce(fetchNextPage);
  return {
    data,
    id,
    queryNext: async () => {
      await fetchNextPageF();
    },
    reset: async () => {
      void queryClient.invalidateQueries({ queryKey: [id] });
    },
    setData: async (values) => {
      queryClient.setQueryData([id, params], values as never);
    },
  };
};
