import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type SignInUserUpdateModel = {
  result: Partial<UserModel>;
  signIn: SignInModel;
};
