import { RequestFormPage } from '@lib-frontend/aroom/pages/RequestForm/RequestForm';
import { TimingFormPage } from '@lib-frontend/aroom/pages/TimingFormPage/TimingFormPage';
import { DEV } from '@lib-frontend/dev/dev.constants';
import { ROUTE_NAVIGATION } from '@lib-frontend/route/route.constants';
import { type RouteModel } from '@lib-frontend/route/route.models';

export const devRoutes: Array<RouteModel> = [
  {
    pathname: DEV,
    routes: [
      {
        element: <RequestFormPage />,
        navigation: ROUTE_NAVIGATION.TRANSITION,
        pathname: 'aroom',
        routes: [
          {
            element: <TimingFormPage />,
            pathname: 'timing',
          },
        ],
      },
    ],
  },
];
