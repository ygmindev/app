import { useQuery } from '@tanstack/react-query';
import isNumber from 'lodash/isNumber';
import { useState } from 'react';

import {
  type _UseQueryModel,
  type _UseQueryParamsModel,
} from '#lib-frontend/data/hooks/useQuery/_useQuery.models';
import { debounce } from '#lib-shared/core/utils/debounce/debounce';

export const _useQuery = <TParams = undefined, TResult = void>(
  ...[id, callback, options]: _UseQueryParamsModel<TParams, TResult>
): _UseQueryModel<TParams, TResult> => {
  const cache = isNumber(options?.cache) ? options?.cache : 0;
  const [params, paramsSet] = useState<TParams | undefined>(options?.defaultParams);
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
    paramsSet,
    query: async () => (isStale ? (await refetchF())?.data : data) ?? null,
  };
};
