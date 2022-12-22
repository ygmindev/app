import { OAUTH_REDIRECT, SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { OAuthRedirect } from '@lib/frontend/auth/containers/OAuthRedirect/OAuthRedirect';
import { SignIn } from '@lib/frontend/auth/containers/SignIn/SignIn';
import type { PagePropsModel } from '@lib/frontend/route/components/Page/Page.models';

export const authRoutes: Array<PagePropsModel> = [
  {
    element: <SignIn />,
    pathname: SIGN_IN,
  },
  {
    element: <OAuthRedirect />,
    pathname: OAUTH_REDIRECT,
  },
];
