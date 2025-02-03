import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { type RouteModel } from '@lib/frontend/route/route.models';
import {
  type GetRoutesModel,
  type GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { testRoutes } from '@lib/frontend/test/test.routes';
import { userRoutes } from '@lib/frontend/user/user.routes';
import { PING } from '@lib/shared/http/http.constants';
import { trimRoutes } from '@lib/shared/route/utils/trimRoutes/trimRoutes';

export const getRoutes = (params: GetRoutesParamsModel = []): GetRoutesModel =>
  trimRoutes([
    {
      element: <PingPage />,
      pathname: PING,
      prerender: true,
    },

    {
      element: <AppLayout />,
      pathname: '/',
      routes: [
        ...params,

        ...userRoutes,

        ...authRoutes,

        ...devRoutes,

        // TODO: test environment only
        ...testRoutes,

        // TODO: fix after build
        // {
        //   element: <NotFoundPage />,
        //   pathname: '/',
        // },
      ],
    },
  ]) as Array<RouteModel>;
