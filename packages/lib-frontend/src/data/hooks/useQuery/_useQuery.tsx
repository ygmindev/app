import { useQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';

import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/_useQuery.models';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const _useQuery = <TType,>(
  ...[_id, callback, options]: _UseQueryParamsModel<TType>
): _UseQueryModel<TType> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const { data, isStale, refetch } = useQuery<TType | null, Error>([_id], callback, {
    cacheTime: cache,
    staleTime: cache,
  });
  const refetchF = debounce(async () => refetch());
  return {
    _id,
    data,
    query: async () => (isStale ? (await refetchF())?.data : data) ?? null,
  };
};
