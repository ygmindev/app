import queryConfig from '@lib/config/query/query';
import { _useQueryConnection } from '@lib/frontend/data/hooks/useQueryConnection/_useQueryConnection';
import {
  type UseQueryConnectionModel,
  type UseQueryConnectionParamsModel,
} from '@lib/frontend/data/hooks/useQueryConnection/useQueryConnection.models';

export const useQueryConnection = <TParams = undefined, TResult = void>(
  ...[id, callback, options, params]: UseQueryConnectionParamsModel<TParams, TResult>
): UseQueryConnectionModel<TResult> => {
  const { cacheTime, cacheTimeDefault } = queryConfig.params();
  const cache = options?.cache;
  const cacheF = (cache === true ? cacheTime : cache) ?? cacheTimeDefault;
  console.warn(cacheF);
  return _useQueryConnection(id, callback, { ...options, cache: cacheF }, params);
};
