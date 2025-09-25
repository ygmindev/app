import { _query } from '@lib/config/query/_query';
import { type _UseQueryParamsModel } from '@lib/frontend/data/hooks/useQuery/_useQuery.models';
import {
  type _QueryClientModel,
  type _QueryClientParamsModel,
} from '@lib/frontend/data/utils/QueryClient/_QueryClient.models';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
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

  prefetch = async (
    ...[id, query, params]: _UseQueryParamsModel<unknown, unknown>
  ): Promise<void> => {
    const idF = filterNil([id, params]);
    await this._client.prefetchQuery({
      queryFn: async () => query(params),
      queryKey: idF,
    });
  };

  public get client(): QueryClient {
    return this._client;
  }

  public get state(): object {
    return dehydrate(this._client);
  }
}
