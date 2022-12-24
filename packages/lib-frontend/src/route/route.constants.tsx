import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import type { PageModel } from '@lib/frontend/route/components/Page/Page.models';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';

export const NOT_FOUND = 'notFound';

export enum ROUTE_TRANSITION {
  SLIDE = 'SLIDE',
}

export const commonRoutes: Array<PageModel> = [
  ...authRoutes,

  ...devRoutes,

  {
    element: <NotFound />,
    pathname: '*',
  },
];
