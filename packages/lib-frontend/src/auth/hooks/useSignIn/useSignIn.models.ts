import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import type { PromiseModel } from '@lib/shared/core/core.models';

export interface UseSignInModel {
  signIn(form: SignInFormModel): Promise<void>;

  signOut: PromiseModel;

  usernameUpdate(form: SignInFormModel): Promise<void>;
}
