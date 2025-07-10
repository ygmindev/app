import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';

export type _UseAuthParamsModel = {
  onAuthenticate(signInToken: SignInTokenModel | null, token?: string): Promise<void>;
  onError(e: Error): void;
  onTokenRefresh(token: string): Promise<void>;
};

export type _UseAuthModel = void;
