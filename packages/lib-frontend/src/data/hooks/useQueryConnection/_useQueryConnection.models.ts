import { type _UseQueryModel } from '@lib/frontend/data/hooks/useQuery/_useQuery.models';
import { type UseQueryOptionsModel } from '@lib/frontend/data/hooks/useQuery/useQuery.models';
import { type QueryConnectionModel } from '@lib/frontend/data/hooks/useQueryConnection/useQueryConnection.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';

export type _UseQueryConnectionParamsModel<TParams = undefined, TResult = void> = [
  id: string,
  query: (params: PaginationModel) => Promise<ConnectionModel<TResult> | null>,
  options?: UseQueryOptionsModel & { limit?: number },
  params?: TParams,
];

export type _UseQueryConnectionModel<TResult> = {
  data?: QueryConnectionModel<TResult>;
  queryNext(): Promise<void>;
} & Omit<_UseQueryModel<TResult>, 'data' | 'query'>;
