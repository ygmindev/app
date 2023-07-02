import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

import {
  type _UseQueryConnectionModel,
  type _UseQueryConnectionParamsModel,
} from '#lib-frontend/query/hooks/useQueryConnection/_useQueryConnection.models';
import { USE_QUERY_CONNECTION_LIMIT_DEFAULT } from '#lib-frontend/query/hooks/useQueryConnection/useQueryConnection.constants';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';

export const _useQueryConnection = <TType,>(
  ...[id, callback, options]: _UseQueryConnectionParamsModel<TType>
): _UseQueryConnectionModel<TType> => {
  const limit = options?.limit || USE_QUERY_CONNECTION_LIMIT_DEFAULT;
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const queryClient = useQueryClient();
  const { data, error, fetchNextPage, isError, isFetching } = useInfiniteQuery<
    ConnectionModel<TType> | null,
    Error
  >([id], async ({ pageParam }) => callback(pageParam as PaginationModel), {
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
