import type { SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';

export interface UseSignInModel {
  signIn(form: SignInFormModel): Promise<void>;

  signOut(): Promise<void>;

  usernameUpdate(form: SignInFormModel): Promise<void>;
}
