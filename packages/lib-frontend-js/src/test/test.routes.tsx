import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
// import { ReportPage } from '@lib/frontend/test/pages/ReportPage/ReportPage';
import { SnapshotPage } from '@lib/frontend/test/pages/SnapshotPage/SnapshotPage';
import { ssrRoute } from '@lib/frontend/test/pages/SsrPage/SsrPage.route';
import { REPORT } from '@lib/frontend/test/test.constants';
import { TEST } from '@lib/shared/test/test.constants';

export const testRoutes: Array<RouteModel> = [
  {
    pathname: TEST,
    routes: [
      ssrRoute,

      {
        navigation: ROUTE_NAVIGATION.TRANSITION,
        pathname: REPORT,
        routes: [
          // {
          //   element: <ReportPage />,
          //   pathname: '/',
          // },
          {
            element: <SnapshotPage />,
            pathname: ':snapshotid',
            prerender: ['sign-in-works'],
          },
        ],
      },
    ],
  },
];
