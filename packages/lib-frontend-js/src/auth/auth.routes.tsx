import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { OAuthRedirectPage } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { FORM_MODE } from '@lib/shared/data/data.constants';

export const authRoutes: Array<RouteModel> = [
  {
    element: <SignInPage mode={FORM_MODE.NEW} />,
    pathname: SIGN_IN,
  },

  {
    element: <OAuthRedirectPage />,
    pathname: REDIRECT,
  },
];
