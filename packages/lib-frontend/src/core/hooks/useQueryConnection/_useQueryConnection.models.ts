import {
  type _UseQueryModel,
  type _UseQueryOptionsModel,
} from '#lib-frontend/core/hooks/useQuery/_useQuery.models';
import { type QueryConnectionModel } from '#lib-frontend/core/hooks/useQueryConnection/useQueryConnection.models';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { type ConnectionModel } from '#lib-shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';

export type _UseQueryConnectionParamsModel<TType> = [
  id: string,
  callback: (params: PaginationModel) => Promise<ConnectionModel<TType> | null>,
  options?: _UseQueryOptionsModel & { limit?: number },
];

export type _UseQueryConnectionModel<TType> = {
  data?: QueryConnectionModel<TType>;
  queryNext: CallablePromiseModel;
} & Omit<_UseQueryModel<TType>, 'data' | 'query'>;
