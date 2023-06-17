import type { SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export type _UseSessionParamsModel = {
  onError?(error: Error): void;
};

export type _UseSessionModel = {
  getToken: CallablePromiseModel<string | null>;
  initialize(onAuth: (signInToken: SignInTokenModel | null) => Promise<void>): Promise<void>;
  signInWithToken(token: string): Promise<void>;
  signOut: CallablePromiseModel;
};
