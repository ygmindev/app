import { type SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';

export type _UseSessionParamsModel = {
  onError?(error: Error): void;
};

export type _UseSessionModel = {
  getToken(): Promise<string | null>;
  initialize(onAuth: (signInToken: SignInTokenModel | null) => Promise<void>): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
};
