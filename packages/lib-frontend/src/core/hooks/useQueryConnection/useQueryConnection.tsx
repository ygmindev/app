import { _useQueryConnection } from '@lib/frontend/core/hooks/useQueryConnection/_useQueryConnection';
import type {
  UseQueryConnectionModel,
  UseQueryConnectionParamsModel,
} from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection.models';

export const useQueryConnection = <TType,>(
  params: UseQueryConnectionParamsModel<TType>,
): UseQueryConnectionModel<TType> => _useQueryConnection(params);
