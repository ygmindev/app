import { AdminHome } from '@lib/frontend/admin/containers/AdminHome/AdminHome';
import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { resourceRoutes } from '@lib/frontend/resource/resource.routes';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { commonRoutes } from '@lib/frontend/routing/routing.constants';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';

export const adminRoutes: Array<PageModel> = [
  {
    Layout: AppLayout,
    isProtected: true,
    pathname: '',
    routes: [{ element: <AdminHome />, pathname: '/' }, ...resourceRoutes, ...settingsRoutes],
  },

  ...commonRoutes,
];
