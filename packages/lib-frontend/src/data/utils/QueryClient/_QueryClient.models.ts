import { type QueryConfigModel } from '@lib/config/query/query.models';
import { type QueryClient } from '@tanstack/react-query';

export type _QueryClientParamsModel = QueryConfigModel;

export type _QueryClientModel = {
  clear(): Promise<void>;

  client: QueryClient;

  state: object;
};
