import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export type _UseSessionParamsModel = {
  onAuthenticate: (signInToken: SignInTokenModel | null, token?: string) => Promise<void>;
  onError?(error: Error): void;
  onTokenRefresh: (token: string) => Promise<void>;
};

export type _UseSessionModel = {
  initialize(): Promise<void>;
  refresh(): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
};
