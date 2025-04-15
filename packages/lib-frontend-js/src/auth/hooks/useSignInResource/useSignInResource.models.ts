import { type SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';

export type UseSignInResourceModel = {
  signIn(input: SignInInputModel): Promise<void>;

  signOut(): Promise<void>;
};
