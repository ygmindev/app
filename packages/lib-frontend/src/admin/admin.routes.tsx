import { AdminHome } from '@lib/frontend/admin/containers/AdminHome/AdminHome';
import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { billingRoutes } from '@lib/frontend/billing/billing.routes';
import { resourceRoutes } from '@lib/frontend/resource/resource.routes';
import type { RouteComponentModel } from '@lib/frontend/routing/containers/Router/Router.models';
import { commonRoutes } from '@lib/frontend/routing/routing.constants';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';

export const adminRoutes: Array<RouteComponentModel> = [
  {
    Layout: AppLayout,
    isProtected: true,
    routes: [
      { element: <AdminHome />, isIndex: true, isProtected: true },
      ...resourceRoutes,
      ...settingsRoutes,
      ...billingRoutes,
    ],
  },

  ...commonRoutes,
];
