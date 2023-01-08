import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type { RouteModel } from '@lib/frontend/route/route.models';

export const routes: Array<RouteModel> = [
  {
    element: <SignInPage />,
    pathname: SIGN_IN,
  },

  {
    element: <DevPage />,
    pathname: '/dev',
  },

  {
    element: <NotFound />,
    pathname: '*',
  },
];
