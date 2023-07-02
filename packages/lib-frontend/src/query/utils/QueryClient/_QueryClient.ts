import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

import { type _QueryClientModel } from '#lib-frontend/query/utils/QueryClient/_QueryClient.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';

export class _QueryClient implements _QueryClientModel {
  protected _client: QueryClient;

  constructor() {
    this._client = new QueryClient({
      defaultOptions: {
        mutations: {
          cacheTime: 0,
          retry: false,
        },
        queries: {
          cacheTime: 0,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          retry: false,
          staleTime: 0,
          suspense: true,
        },
      },
    });

    if (!isServer) {
      const persister = createAsyncStoragePersister({ storage: AsyncStorage });
      persistQueryClient({
        dehydrateOptions: {
          shouldDehydrateMutation: ({ cacheTime }) => cacheTime > 0,
          shouldDehydrateQuery: ({ cacheTime }) => cacheTime > 0,
        },
        persister,
        queryClient: this._client,
      });
    }
  }

  public get client(): QueryClient {
    return this._client;
  }

  public get state(): object {
    return dehydrate(this._client);
  }
}
