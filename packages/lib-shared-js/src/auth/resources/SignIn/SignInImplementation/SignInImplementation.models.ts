import { type SignInModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type SignInInputModel } from '@lib/shared/auth/resources/SignIn/SignInInput/SignInInput.models';

export type SignInImplementationModel = {
  signIn(input: SignInInputModel): Promise<SignInModel>;

  // userUpdate(
  //   input: EntityResourceDataModel<UserModel>,
  //   context?: RequestContextModel,
  // ): Promise<SignInModel>;

  // usernameUpdate(
  //   input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>,
  //   context?: RequestContextModel,
  // ): Promise<SignInModel>;
};
