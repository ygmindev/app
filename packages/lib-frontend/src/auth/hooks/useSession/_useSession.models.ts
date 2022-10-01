import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export interface _UseSessionParamsModel {}

export interface _UseSessionModel {
  getToken(): Promise<string | null>;
  initialize(onAuth: (signInToken: SignInTokenModel | null) => Promise<unknown>): Promise<unknown>;
  signInWithToken(token: string): Promise<unknown>;
  signOut(): Promise<unknown>;
}
