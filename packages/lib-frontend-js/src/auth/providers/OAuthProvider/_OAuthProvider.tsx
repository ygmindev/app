import { type _OAuthProviderPropsModel } from '@lib/frontend/auth/providers/OAuthProvider/_OAuthProvider.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Fragment } from 'react';

export const _OAuthProvider = composeComponent<_OAuthProviderPropsModel, ChildPropsModel>({
  Component: Fragment,

  getProps: ({ children, secrets }) => ({
    children: <GoogleOAuthProvider clientId={secrets.google}>{children}</GoogleOAuthProvider>,
  }),
});
