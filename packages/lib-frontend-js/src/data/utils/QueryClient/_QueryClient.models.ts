import { type QueryConfigModel } from '@lib/config/query/query.models';
import { type _UseQueryParamsModel } from '@lib/frontend/data/hooks/useQuery/_useQuery.models';
import { type QueryClient } from '@tanstack/react-query';

export type _QueryClientParamsModel = QueryConfigModel;

export type _QueryClientModel = {
  clear(): Promise<void>;

  client: QueryClient;

  prefetch(...[params]: _UseQueryParamsModel<unknown, unknown>): Promise<void>;

  state: object;
};
