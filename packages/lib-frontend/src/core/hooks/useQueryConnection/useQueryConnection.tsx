import { _useQueryConnection } from '@lib/frontend/core/hooks/useQueryConnection/_useQueryConnection';
import type {
  UseQueryConnectionModel,
  UseQueryConnectionParamsModel,
} from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection.models';

export const useQueryConnection = <TType, TError extends Error = Error>(
  params: UseQueryConnectionParamsModel<TType>,
): UseQueryConnectionModel<TType, TError> => _useQueryConnection(params);
