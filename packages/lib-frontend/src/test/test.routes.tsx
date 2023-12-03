import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteList } from '#lib-frontend/route/utils/getRouteList/getRouteList';
import { ReportPage } from '#lib-frontend/test/pages/ReportPage/ReportPage';
import { SnapshotPage } from '#lib-frontend/test/pages/SnapshotPage/SnapshotPage';
import { REPORT } from '#lib-frontend/test/test.constants';
import { TEST } from '#lib-shared/test/test.constants';

export const testRoutes: Array<RouteModel> = [
  {
    pathname: TEST,
    routes: [
      getRouteList({
        pathname: REPORT,
        routes: [
          {
            element: <ReportPage />,
            pathname: '/',
          },
          {
            element: <SnapshotPage />,
            pathname: ':snapshotid',
            prerender: ['sign-in-works'],
          },
        ],
      }),
    ],
  },
];
