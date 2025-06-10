import { type RequestContextModel } from '@lib/config/api/api.models';
import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';

export type SignInImplementationModel = {
  signIn(input: SignInInputModel): Promise<SignInModel>;

  usernameUpdate(input: SignInInputModel, context?: RequestContextModel): Promise<SignInModel>;

  // userUpdate(
  //   input: EntityResourceDataModel<UserModel>,
  //   context?: RequestContextModel,
  // ): Promise<SignInModel>;
};
