import type {
  _UseQueryConnectionModel,
  _UseQueryConnectionParamsModel,
} from '#lib-frontend/core/hooks/useQueryConnection/_useQueryConnection.models';
import type { ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';

export interface QueryConnectionModel<TType> {
  pages?: Array<ConnectionModel<TType> | null>;
}

export interface UseQueryConnectionParamsModel<TType>
  extends Omit<_UseQueryConnectionParamsModel<TType>, 'cache'> {
  cache?: number | boolean;
}

export interface UseQueryConnectionModel<TType> extends _UseQueryConnectionModel<TType> {}
