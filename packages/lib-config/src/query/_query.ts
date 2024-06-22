import { type _QueryConfigModel, type QueryConfigModel } from '@lib/config/query/query.models';

export const _query = ({ cacheTime, cacheTimeDefault }: QueryConfigModel): _QueryConfigModel => ({
  mutations: {
    gcTime: cacheTimeDefault,
    retry: false,
  },
  queries: {
    gcTime: cacheTimeDefault,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: cacheTimeDefault,
  },
});
