import { type _QueryConfigModel, type QueryConfigModel } from '#lib-config/data/query/query.models';

export const _query = ({ cacheTime }: QueryConfigModel): _QueryConfigModel => ({
  mutations: {
    cacheTime,
    retry: false,
  },
  queries: {
    cacheTime,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: cacheTime,
    suspense: true,
  },
});
