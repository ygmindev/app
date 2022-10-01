import type {
  _UseQueryParamsModel,
  _UseQueryResultModel,
} from '@lib/frontend/core/hooks/useQuery/_useQuery.models';
import {
  QUERY_EXPIRATION_MILLISECONDS_DEFAULT,
  QUERY_RETRY_COUNT_DEFAULT,
  QUERY_RETRY_DELAY_MILLISECONDS_DEFAULT,
} from '@lib/frontend/core/hooks/useQuery/useQuery.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toNumber } from 'lodash';

export const _useQuery = <TResult = void, TError extends Error = Error>({
  cache,
  id,
  isDisabled,
  isInfinite,
  query,
}: _UseQueryParamsModel<TResult>): _UseQueryResultModel<TResult, TError> => {
  const queryClient = useQueryClient();

  const cacheTime = cache
    ? cache === true
      ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT
      : toNumber(cache)
    : 0;

  const {
    data,
    error,
    isError,
    isFetching,
    isStale,
    refetch,
  }: UseQueryResult<TResult | null, TError | null> = useQuery<TResult | null, TError | null>(
    [id],
    async (): Promise<TResult | null> => {
      let result = await query();
      if (isInfinite) {
        result = merge({
          strategy: MERGE_STRATEGY.DEEP_APPEND,
          values: [result || {}, data || {}],
        });
      }
      return result;
    },
    {
      cacheTime,
      enabled: isDisabled !== true,
      keepPreviousData: isInfinite,
      retry: QUERY_RETRY_COUNT_DEFAULT,
      retryDelay: QUERY_RETRY_DELAY_MILLISECONDS_DEFAULT,
      staleTime: cacheTime,
    },
  );

  const _refetch = debounce({ callback: refetch });

  return {
    data,
    error,
    id,
    isError,
    isLoading: isFetching,
    query: () => {
      if (isStale) {
        cache && debug(`Cache does not exist for key ${id}. Refetching`);
        return _refetch() as unknown as Promise<TResult | null | undefined>;
      }
      return Promise.resolve(data);
    },
    resetQuery: (id) => queryClient.invalidateQueries([id]),
    setQueryData: (id, data) => queryClient.setQueryData([id], data),
  };
};
