import type { SignInFormModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';
import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export type UseSignInResourceModel = {
  signIn(form: SignInFormModel): Promise<void>;

  signOut: CallablePromiseModel;

  usernameUpdate(form: SignInFormModel): Promise<void>;
};
