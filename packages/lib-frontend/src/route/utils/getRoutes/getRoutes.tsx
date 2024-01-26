import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { authRoutes } from '@lib/frontend/auth/auth.routes';
import { devRoutes } from '@lib/frontend/dev/dev.routes';
import { PingPage } from '@lib/frontend/http/pages/PingPage/PingPage';
import { type RouteModel } from '@lib/frontend/route/route.models';
import {
  type GetRoutesModel,
  type GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { userRoutes } from '@lib/frontend/user/user.routes';
import { PING } from '@lib/shared/http/http.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      element: <PingPage />,
      pathname: PING,
    },

    {
      element: <AppLayout />,
      pathname: '/',
      routes: [
        ...appRoutes,

        ...userRoutes,

        ...authRoutes,

        ...devRoutes,

        // TODO: fix after build
        // {
        //   element: <NotFoundPage />,
        //   pathname: '/',
        // },
      ],
    },
  ] as Array<RouteModel>;
