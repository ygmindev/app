import { type _RoutesConfigModel, type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { Config } from '@lib/config/utils/Config/Config';
import { RootLayout } from '@lib/frontend/app/layouts/RootLayout/RootLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import { SITE_MAP } from '@lib/frontend/route/pages/route.constants';
import { SitemapPage } from '@lib/frontend/route/pages/SitemapPage/SitemapPage';
import { settingRoutes } from '@lib/frontend/settings/settings.routes';
import { testRoutes } from '@lib/frontend/test/test.routes';
import { userRoutes } from '@lib/frontend/user/user.routes';
import { PING } from '@lib/shared/http/http.constants';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';

export const routesConfig = new Config<RoutesConfigModel, _RoutesConfigModel>({
  config: ({ routes = [] }) => {
    const routesF = [
      ...routes,

      ...trimRoutes([
        {
          element: <SitemapPage routes={routes} />,
          pathname: SITE_MAP,
          prerender: true,
        },

        ...devRoutes,

        ...testRoutes,

        {
          element: <PingPage />,
          pathname: PING,
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
        element: <RootLayout />,
        pathname: '/',
        routes: routesF,
      },
    ];
  },

  params: () => ({
    routes: [...authRoutes, ...settingRoutes, ...userRoutes],
  }),
});
