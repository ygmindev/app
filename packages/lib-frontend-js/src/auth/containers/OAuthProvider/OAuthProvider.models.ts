import { type _OAuthProviderPropsModel } from '@lib/frontend/auth/containers/OAuthProvider/_OAuthProvider.models';

export type OAuthProviderPropsModel = Omit<_OAuthProviderPropsModel, 'secrets'>;
