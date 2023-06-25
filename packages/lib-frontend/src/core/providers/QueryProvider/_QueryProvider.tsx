import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { Suspense, useState } from 'react';

import type { FCModel } from '#lib-frontend/core/core.models';
import type { _QueryProviderPropsModel } from '#lib-frontend/core/providers/QueryProvider/_QueryProvider.models';
import { isServer } from '#lib-platform/core/utils/isServer/isServer';
export const _QueryProvider: FCModel<_QueryProviderPropsModel> = ({ children }) => {
  const [client] = useState(() => {
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
        queryClient,
      });
    }
    return queryClient;
  });
  return (
    <QueryClientProvider client={client}>
      <Suspense>{children}</Suspense>

      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
