import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { SITE_MAP } from '@lib/frontend/route/pages/route.constants';
import { SitemapPage } from '@lib/frontend/route/pages/SitemapPage/SitemapPage';
import { type RouteModel } from '@lib/frontend/route/route.models';
import {
  type GetRoutesModel,
  type GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { testRoutes } from '@lib/frontend/test/test.routes';
import { userRoutes } from '@lib/frontend/user/user.routes';
import { PING } from '@lib/shared/http/http.constants';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';

export const getRoutes = (params: GetRoutesParamsModel = []): GetRoutesModel => {
  let routes: Array<RouteModel> = trimRoutes([
    {
      element: <PingPage />,
      pathname: PING,
      prerender: true,
    },

    {
      element: <PingPage />,
      pathname: 'ping2',
      prerender: true,
    },

    ...authRoutes,

    {
      element: <AppLayout />,
      pathname: 'app',
      routes: [
        ...params,

        ...userRoutes,

        ...devRoutes,

        // TODO: test environment only?
        ...testRoutes,
      ],
    },

    {
      element: <NotFoundPage />,
      pathname: '*',
    },
  ]);

  routes = [
    ...routes,

    ...trimRoutes([
      {
        element: <SitemapPage routes={routes} />,
        pathname: SITE_MAP,
        prerender: true,
      },
    ]),
  ];

  return routes;
};
