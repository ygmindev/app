import { Button } from '@lib/frontend/core/components/Button/Button';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type { RouteModel } from '@lib/frontend/route/route.models';

export const routes: Array<RouteModel> = [
  {
    pathname: '/',
    routes: [
      {
        element: <Button>test 2</Button>,
        isIndex: true,
        pathname: '/test',
      },
    ],
  },

  {
    element: <NotFound />,
    pathname: '*',
  },
];
