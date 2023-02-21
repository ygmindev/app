import type {
  _UseQueryModel,
  _UseQueryParamsModel,
} from '@lib/frontend/core/hooks/useQuery/_useQuery.models';
import type { QueryConnectionModel } from '@lib/frontend/core/hooks/useQueryConnection/useQueryConnection.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import type { PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';

export interface _UseQueryConnectionParamsModel<TType>
  extends Omit<_UseQueryParamsModel<TType>, 'query'> {
  limit?: number;
  query(params: PaginationModel): Promise<ConnectionModel<TType> | null>;
}

export interface _UseQueryConnectionModel<TType>
  extends Omit<_UseQueryModel<TType>, 'data' | 'query'> {
  data?: QueryConnectionModel<TType>;
  queryNext: CallablePromiseModel;
}
