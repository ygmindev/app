import { _OAuthProvider } from '@lib/frontend/auth/containers/OAuthProvider/_OAuthProvider';
import { type _OAuthProviderPropsModel } from '@lib/frontend/auth/containers/OAuthProvider/_OAuthProvider.models';
import { type OAuthProviderPropsModel } from '@lib/frontend/auth/containers/OAuthProvider/OAuthProvider.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const OAuthProvider = composeComponent<OAuthProviderPropsModel, _OAuthProviderPropsModel>({
  Component: _OAuthProvider,

  getProps: ({ children }) => ({
    children,
    secrets: {
      google: process.env.APP_GOOGLE_OAUTH_APP_ID,
    },
  }),
});

process.env.APP_IS_DEBUG && (OAuthProvider.displayName = variableName({ OAuthProvider }));
