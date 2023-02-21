import type {
  _UseQueryModel,
  _UseQueryParamsModel,
} from '@lib/frontend/core/hooks/useQuery/_useQuery.models';
import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '@lib/frontend/core/hooks/useQuery/useQuery.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toNumber from 'lodash/toNumber';

export const _useQuery = <TType,>({
  cache,
  id,
  query,
}: _UseQueryParamsModel<TType>): _UseQueryModel<TType> => {
  const queryClient = useQueryClient();

  const cacheTime = cache
    ? cache === true
      ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT
      : toNumber(cache)
    : 0;

  const { data, error, isError, isFetching, isStale, refetch } = useQuery<TType | null, Error>(
    [id],
    async () => query(),
    { cacheTime, retry: false, staleTime: cacheTime },
  );

  const _refetch = debounce({ callback: refetch });

  return {
    data,
    error,
    id,
    isError,
    isLoading: isFetching,
    query: async () => {
      if (isStale) {
        const result = await _refetch();
        return result?.data || null;
      }
      return data || null;
    },
    resetQuery: (id) => queryClient.invalidateQueries([id]),
    setQueryData: (id, data) => queryClient.setQueryData([id], data),
  };
};
