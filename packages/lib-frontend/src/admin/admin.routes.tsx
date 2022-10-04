import { Resource } from '@lib/frontend/admin/containers/Resource/Resource';
import { RESOURCE } from '@lib/frontend/app/app.constants';
import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { NotFound } from '@lib/frontend/routing/containers/NotFound/NotFound';

export const adminRoutes: Array<PageModel> = [
  {
    Layout: AppLayout,
    pathname: '/',
    routes: [
      ...authRoutes,

      {
        element: <Resource />,
        pathname: `${RESOURCE}/:name`,
      },
    ],
  },

  ...devRoutes,

  {
    element: <NotFound />,
    pathname: '*',
  },
];
