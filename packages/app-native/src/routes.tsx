import { Button } from '@lib/frontend/core/components/Button/Button';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const routes: Array<RouteModel> = [
  {
    pathname: '/',
    routes: [
      {
        element: <Button>test 2</Button>,
        pathname: 'test',
      },
    ],
  },
];
