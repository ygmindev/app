import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export interface _UseSessionParamsModel {}

export interface _UseSessionModel {
  getToken(): Promise<string | null>;
  initialize(onAuth: (signInToken: SignInTokenModel | null) => Promise<void>): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut(): Promise<void>;
}
