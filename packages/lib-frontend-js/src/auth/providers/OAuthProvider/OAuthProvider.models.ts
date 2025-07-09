import { type _OAuthProviderPropsModel } from '@lib/frontend/auth/providers/OAuthProvider/_OAuthProvider.models';

export type OAuthProviderPropsModel = Omit<_OAuthProviderPropsModel, 'secrets'>;
