import { DEV, SCRATCH_PAD } from '@lib/frontend/dev/dev.constants';
import { ScratchPadPage } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const devRoutes: Array<RouteModel> = [
  {
    pathname: DEV,
    routes: [
      {
        element: <ScratchPadPage />,
        pathname: SCRATCH_PAD,
      },
    ],
  },
];
