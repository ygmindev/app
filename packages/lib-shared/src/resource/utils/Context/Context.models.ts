import type { SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';

export type ContextModel = {
  user?: SignInTokenModel;
};
