import { QUERY_EXPIRATION_MILLISECONDS_DEFAULT } from '@lib/frontend/core/hooks/useQuery/useQuery.constants';
import { _useQueryConnection } from '@lib/frontend/core/hooks/useQueryConnection/_useQueryConnection';
import type {
  UseQueryConnectionModel,
  UseQueryConnectionParamsModel,
} from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection.models';

export const useQueryConnection = <TType,>({
  cache,
  ...params
}: UseQueryConnectionParamsModel<TType>): UseQueryConnectionModel<TType> => {
  const _cache = cache ? (cache === true ? QUERY_EXPIRATION_MILLISECONDS_DEFAULT : cache) : 0;
  return _useQueryConnection({ ...params, cache: _cache });
};
