import type { _QueryProviderPropsModel } from '#lib-frontend/core/providers/QueryProvider/_QueryProvider.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import type { QueryClientProviderProps } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

import { isSsr } from '#lib-platform/core/utils/isSsr/isSsr';

const queryClient = new QueryClient({
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
    },
  },
});

if (!isSsr) {
  const persister = createAsyncStoragePersister({ storage: AsyncStorage });
  persistQueryClient({
    dehydrateOptions: {
      shouldDehydrateMutation: ({ cacheTime }) => cacheTime > 0,
      shouldDehydrateQuery: ({ cacheTime }) => cacheTime > 0,
    },
    persister,
    queryClient,
  });
}

export const _QueryProvider = composeComponent<_QueryProviderPropsModel, QueryClientProviderProps>({
  Component: QueryClientProvider,

  getProps: ({ children }) => ({ children, client: queryClient }),
});
