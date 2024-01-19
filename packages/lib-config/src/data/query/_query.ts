import { type _QueryConfigModel, type QueryConfigModel } from '@lib/config/data/query/query.models';

export const _query = ({ cacheTime }: QueryConfigModel): _QueryConfigModel => ({
  mutations: {
    gcTime: cacheTime,
    retry: false,
  },
  queries: {
    gcTime: cacheTime,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: cacheTime,
  },
});
