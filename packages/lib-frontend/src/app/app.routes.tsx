import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import type { RouteComponentModel } from '@lib/frontend/routing/containers/Router/Router.models';
import { commonRoutes } from '@lib/frontend/routing/routing.constants';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';

export const appRoutes: Array<RouteComponentModel> = [
  {
    Layout: AppLayout,
    pathname: '',
    routes: [...settingsRoutes],
  },

  ...commonRoutes,
];
