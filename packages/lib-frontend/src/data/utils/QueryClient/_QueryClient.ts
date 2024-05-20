import { _config } from '@lib/config/query/query';
import { type _QueryClientModel } from '@lib/frontend/data/utils/QueryClient/_QueryClient.models';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

export class _QueryClient implements _QueryClientModel {
  protected _client: QueryClient;

  constructor() {
    this._client = new QueryClient({ defaultOptions: _config });

    if (!isServer) {
      const persister = createAsyncStoragePersister({ storage: AsyncStorage });
      void persistQueryClient({
        dehydrateOptions: {
          // TODO: fix
          // shouldDehydrateMutation: ({ cacheTime }) => cacheTime > 0,
          // shouldDehydrateQuery: ({ cacheTime }) => cacheTime > 0,
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
