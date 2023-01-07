import { RouteLink } from '@lib/frontend/route/components/RouteLink/RouteLink';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type { RouteModel } from '@lib/frontend/route/route.models';

export const routes: Array<RouteModel> = [
  {
    pathname: '/',
    routes: [
      {
        element: <RouteLink pathname={'/testb'}>TEST A</RouteLink>,
        pathname: '/testa',
      },
      {
        element: <RouteLink pathname={'/testa'}>TEST B</RouteLink>,
        pathname: '/testb',
      },
    ],
  },

  {
    element: <NotFound />,
    pathname: '*',
  },
];
