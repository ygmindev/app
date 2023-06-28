import { useQuery, useQueryClient } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

import type {
  _UseQueryModel,
  _UseQueryParamsModel,
} from '#lib-frontend/core/hooks/useQuery/_useQuery.models';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const _useQuery = <TType,>(
  ...[id, callback, options]: _UseQueryParamsModel<TType>
): _UseQueryModel<TType> => {
  const queryClient = useQueryClient();
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const { data, error, isError, isFetching, isStale, refetch } = useQuery<TType | null, Error>(
    [id],
    async () => callback(),
    { cacheTime: cache, staleTime: cache },
  );
  const refetchF = debounce(refetch);
  return {
    data,
    error,
    id,
    isError,
    isLoading: isFetching,
    query: async () => (isStale ? (await refetchF())?.data : data) || null,
    resetQuery: async (id) => queryClient.invalidateQueries([id]),
    setQueryData: (id, data) => queryClient.setQueryData([id], data),
  };
};
