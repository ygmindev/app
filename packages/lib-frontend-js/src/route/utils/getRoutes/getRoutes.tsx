import { AppContainer } from '@lib/frontend/app/containers/AppContainer/AppContainer';
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
import { settingRoutes } from '@lib/frontend/settings/settings.routes';
import { testRoutes } from '@lib/frontend/test/test.routes';
import { userRoutes } from '@lib/frontend/user/user.routes';
import { APP } from '@lib/shared/app/app.constants';
import { PING } from '@lib/shared/http/http.constants';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';

export const getRoutes = (routes: GetRoutesParamsModel = []): GetRoutesModel => {
  let routesF: Array<RouteModel> = trimRoutes([
    {
      element: <PingPage />,
      pathname: PING,
      prerender: true,
    },

    ...authRoutes,

    ...settingRoutes,

    {
      pathname: APP,
      routes: [...routes, ...userRoutes, ...devRoutes, ...testRoutes],
    },
  ]);

  routesF[routesF.length - 1].element = <AppLayout routes={routesF[routesF.length - 1].routes} />;

  routesF = [
    ...routesF,

    ...trimRoutes([
      {
        element: <SitemapPage routes={routesF} />,
        pathname: SITE_MAP,
        prerender: true,
      },

      {
        element: <NotFoundPage />,
        pathname: '*',
      },
    ]),
  ];

  return [
    {
      element: <AppContainer />,
      pathname: '/',
      routes: routesF,
    },
  ];
};
