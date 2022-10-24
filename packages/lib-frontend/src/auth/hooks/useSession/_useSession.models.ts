import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import type { PromiseModel } from '@lib/shared/core/core.models';

export interface _UseSessionParamsModel {}

export interface _UseSessionModel {
  getToken: PromiseModel<string | null>;
  initialize(onAuth: (signInToken: SignInTokenModel | null) => Promise<void>): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut: PromiseModel;
}
