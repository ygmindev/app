import type { SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import type { SignInServiceModel } from '@lib/shared/auth/resources/SignIn/SignInService/SignInService.models';

export interface UseSignInResourceResourceModel extends SignInServiceModel {
  remember(signIn: SignInModel | null): Promise<void>;

  signOut(): Promise<void>;
}
