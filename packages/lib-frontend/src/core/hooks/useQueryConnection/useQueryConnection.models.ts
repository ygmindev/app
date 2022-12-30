import type {
  _UseQueryConnectionModel,
  _UseQueryConnectionParamsModel,
} from '@lib/frontend/core/hooks/useQueryConnection/_useQueryConnection.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export interface QueryConnectionModel<TType> {
  pages?: Array<ConnectionModel<TType> | null>;
}

export interface UseQueryConnectionParamsModel<TType>
  extends _UseQueryConnectionParamsModel<TType> {}

export interface UseQueryConnectionModel<TType, TError extends Error = Error>
  extends _UseQueryConnectionModel<TType, TError> {}
