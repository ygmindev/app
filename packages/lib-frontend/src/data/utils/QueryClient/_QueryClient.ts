import { _query } from '@lib/config/query/_query';
import {
  type _QueryClientModel,
  type _QueryClientParamsModel,
} from '@lib/frontend/data/utils/QueryClient/_QueryClient.models';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

export class _QueryClient implements _QueryClientModel {
  protected _client: QueryClient;

  constructor(params: _QueryClientParamsModel) {
    this._client = new QueryClient({ defaultOptions: _query(params) });

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

  clear = async (): Promise<void> => {
    void this._client.clear();
  };

  public get client(): QueryClient {
    return this._client;
  }

  public get state(): object {
    return dehydrate(this._client);
  }
}
