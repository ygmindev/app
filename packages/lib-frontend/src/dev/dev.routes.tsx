import { DEV, SCRATCH_PAD } from '#lib-frontend/dev/dev.constants';
import { DevPage } from '#lib-frontend/dev/pages/DevPage/DevPage';
import { ScratchPadPage } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';

export const devRoutes: Array<RouteModel> = [
  getRouteGroup({
    element: <DevPage />,
    pathname: DEV,
    routes: [
      {
        element: <ScratchPadPage />,
        pathname: SCRATCH_PAD,
      },
    ],
  }),
];
