import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export interface ContextModel {
  user?: SignInTokenModel;
}
