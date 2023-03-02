import { _useQuery } from '@lib/frontend/core/hooks/useQuery/_useQuery';
import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '@lib/frontend/core/hooks/useQuery/useQuery.constants';
import type {
  UseQueryModel,
  UseQueryParamsModel,
} from '@lib/frontend/core/hooks/useQuery/useQuery.models';
import toNumber from 'lodash/toNumber';

export const useQuery = <TType,>({
  cache,
  ...params
}: UseQueryParamsModel<TType>): UseQueryModel<TType> => {
  const _cache = cache
    ? cache === true
      ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT
      : toNumber(cache)
    : 0;
  return _useQuery({ ...params, cache: _cache });
};
