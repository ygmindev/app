import {
  type _UseQueryConnectionModel,
  type _UseQueryConnectionParamsModel,
} from '#lib-frontend/core/hooks/useQueryConnection/_useQueryConnection.models';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';

export type QueryConnectionModel<TType> = {
  pages?: Array<ConnectionModel<TType> | null>;
};

export type UseQueryConnectionParamsModel<TType> = {
  cache?: number | boolean;
} & Omit<_UseQueryConnectionParamsModel<TType>, 'cache'>;

export type UseQueryConnectionModel<TType> = _UseQueryConnectionModel<TType>;
