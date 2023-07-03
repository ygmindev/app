import { config } from '#lib-config/data/query/query';
import { _useQueryConnection } from '#lib-frontend/data/hooks/useQueryConnection/_useQueryConnection';
import {
  type UseQueryConnectionModel,
  type UseQueryConnectionParamsModel,
} from '#lib-frontend/data/hooks/useQueryConnection/useQueryConnection.models';

export const useQueryConnection = <TType,>(
  ...[id, callback, options]: UseQueryConnectionParamsModel<TType>
): UseQueryConnectionModel<TType> => {
  const cache = options?.cache;
  const cacheF = (cache === true ? config.cacheTime : cache) || config.cacheTimeDefault;
  return _useQueryConnection(id, callback, { ...options, cache: cacheF });
};
