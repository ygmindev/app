import { useInfiniteQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

import {
  type _UseQueryConnectionModel,
  type _UseQueryConnectionParamsModel,
} from '@lib/frontend/data/hooks/useQueryConnection/_useQueryConnection.models';
import { USE_QUERY_CONNECTION_LIMIT_DEFAULT } from '@lib/frontend/data/hooks/useQueryConnection/useQueryConnection.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';

export const _useQueryConnection = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: _UseQueryConnectionParamsModel<TParams, TResult>
): _UseQueryConnectionModel<TResult> => {
  const limit = options?.limit || USE_QUERY_CONNECTION_LIMIT_DEFAULT;
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const { data, fetchNextPage } = useInfiniteQuery<ConnectionModel<TResult> | null, Error>(
    [id],
    async ({ pageParam }) => callback(pageParam as PaginationModel),
    {
      cacheTime: cache,
      getNextPageParam: (params) =>
        params && params.pageInfo.hasNextPage
          ? { after: params.pageInfo.endCursor, first: limit }
          : undefined,
      getPreviousPageParam: (params) =>
        params && params.pageInfo.hasPreviousPage
          ? { after: params.pageInfo.endCursor, first: limit }
          : undefined,
      // refetchOnMount: cache === 0 ? 'always' : true,
      staleTime: cache,
    },
  );

  const fetchNextPageF = debounce(fetchNextPage);

  return {
    data,
    id,
    queryNext: async () => {
      await fetchNextPageF();
    },
  };
};
