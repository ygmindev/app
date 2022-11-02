import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import { resourceRoutes } from '@lib/frontend/resource/resource.routes';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { NotFound } from '@lib/frontend/routing/containers/NotFound/NotFound';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';

export const adminRoutes: Array<PageModel> = [
  {
    Layout: AppLayout,
    isProtected: true,
    pathname: '/',
    routes: [...resourceRoutes, ...settingsRoutes],
  },

  ...authRoutes,

  ...devRoutes,

  {
    element: <NotFound />,
    pathname: '*',
  },
];
