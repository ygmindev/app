import { DEV } from '#lib-frontend/dev/dev.constants';
import { DevPage } from '#lib-frontend/dev/pages/DevPage/DevPage';
import { ScratchPadPage } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage';
import { type RouteModel } from '#lib-frontend/route/route.models';

export const devRoutes: Array<RouteModel> = [
  {
    pathname: DEV,
    routes: [
      {
        element: <DevPage />,
        pathname: '1',
        transition: 'slide',
      },
      {
        element: <ScratchPadPage />,
        pathname: '2',
        transition: 'slide',
      },
    ],
    transition: 'slide',
  },
];

// import { DEV, SCRATCH_PAD } from '#lib-frontend/dev/dev.constants';
// import { DevPage } from '#lib-frontend/dev/pages/DevPage/DevPage';
// import { ScratchPadPage } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage';
// import { type RouteModel } from '#lib-frontend/route/route.models';
// import { getRouteList } from '#lib-frontend/route/utils/getRouteList/getRouteList';

// export const devRoutes: Array<RouteModel> = [
//   getRouteList({
//     element: <DevPage />,
//     pathname: DEV,
//     routes: [
//       {
//         element: <ScratchPadPage />,
//         pathname: SCRATCH_PAD,
//       },
//     ],
//   }),
// ];
