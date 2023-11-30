import { useQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/_useQuery.models';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const _useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: _UseQueryParamsModel<TParams, TResult>
): _UseQueryModel<TResult> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const { data, isStale, refetch } = useQuery<TResult | null, Error>(
    [id, params],
    () => callback(params),
    {
      cacheTime: cache,
      // refetchOnMount: cache === 0 ? 'always' : true,
      staleTime: cache,
    },
  );
  const refetchF = debounce(async () => refetch());
  return {
    data,
    id,
    query: async () => (isStale ? (await refetchF())?.data : data) ?? null,
  };
};
