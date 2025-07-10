import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseSignInResourceModel = {
  setAuth(token?: string, user?: RefModel<UserModel>): Promise<void>;

  signIn(input: SignInInputModel): Promise<void>;

  signOut(): Promise<void>;

  usernameUpdate(input: SignInInputModel): Promise<void>;

  verifyToken(input: string): Promise<void>;
};
