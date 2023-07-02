import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, useState } from 'react';

import { type FCModel } from '#lib-frontend/core/core.models';
import { type _QueryProviderPropsModel } from '#lib-frontend/data/providers/QueryProvider/_QueryProvider.models';
import { QueryClient } from '#lib-frontend/data/utils/QueryClient/QueryClient';

export const _QueryProvider: FCModel<_QueryProviderPropsModel> = ({ children, value }) => {
  const [client] = useState(() => value?.client ?? new QueryClient().client);
  return (
    <QueryClientProvider client={client}>
      <Suspense>
        <Hydrate state={value?.state}>{children}</Hydrate>
      </Suspense>

      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};
