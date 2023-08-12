import { type SignInFormModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';

export type UseSignInResourceModel = {
  signIn(form: SignInFormModel): Promise<void>;

  signInUpdate(form: SignInFormModel): Promise<void>;

  signOut(): Promise<void>;
};
