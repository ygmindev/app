import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { commonRoutes } from '@lib/frontend/routing/routing.constants';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';

export const appRoutes: Array<PageModel> = [
  {
    Layout: AppLayout,
    pathname: '',
    routes: [...settingsRoutes],
  },

  ...commonRoutes,
];
