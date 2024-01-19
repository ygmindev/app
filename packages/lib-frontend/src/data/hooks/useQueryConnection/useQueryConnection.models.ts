import {
  type _UseQueryConnectionModel,
  type _UseQueryConnectionParamsModel,
} from '@lib/frontend/data/hooks/useQueryConnection/_useQueryConnection.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export type QueryConnectionModel<TResult> = {
  pages?: Array<ConnectionModel<TResult> | null>;
};

export type UseQueryConnectionParamsModel<TParams = undefined, TResult = void> = Omit<
  _UseQueryConnectionParamsModel<TParams, TResult>,
  'cache'
> & {
  cache?: number | boolean;
};

export type UseQueryConnectionModel<TResult> = _UseQueryConnectionModel<TResult>;
