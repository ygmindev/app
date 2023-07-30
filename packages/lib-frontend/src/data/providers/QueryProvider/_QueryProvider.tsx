import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import { type FCModel } from '#lib-frontend/core/core.models';
import { type _QueryProviderPropsModel } from '#lib-frontend/data/providers/QueryProvider/_QueryProvider.models';
import { QueryClient } from '#lib-frontend/data/utils/QueryClient/QueryClient';

export const _QueryProvider: FCModel<_QueryProviderPropsModel> = ({ children, value }) => {
  const [client] = useState(() => value?.client ?? new QueryClient().client);
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={value?.state}>{children}</Hydrate>
    </QueryClientProvider>
  );
};
