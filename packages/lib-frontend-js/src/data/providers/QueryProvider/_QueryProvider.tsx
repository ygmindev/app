import { type FCModel } from '@lib/frontend/core/core.models';
import { type _QueryProviderPropsModel } from '@lib/frontend/data/providers/QueryProvider/_QueryProvider.models';
import { QueryClient } from '@lib/frontend/data/utils/QueryClient/QueryClient';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export const _QueryProvider: FCModel<_QueryProviderPropsModel> = ({ children, value }) => {
  const [client] = useState(() => value?.client ?? new QueryClient().client);
  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary state={value?.state}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};
