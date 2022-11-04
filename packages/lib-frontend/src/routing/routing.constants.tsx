import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { NotFound } from '@lib/frontend/routing/containers/NotFound/NotFound';

export const NOT_FOUND = 'notFound';

export const commonRoutes: Array<PageModel> = [
  ...authRoutes,

  ...devRoutes,

  {
    element: <NotFound />,
    pathname: '*',
  },
];
