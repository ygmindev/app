import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export type _UseSessionParamsModel = {
  onError?(error: Error): void;
};

export type _UseSessionModel = {
  initialize(params: {
    onAuthenticate: (signInToken: SignInTokenModel | null, token?: string) => Promise<void>;
    onTokenRefresh: (token: string) => Promise<void>;
  }): Promise<void>;
  refreshToken(): Promise<string | null>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
};
