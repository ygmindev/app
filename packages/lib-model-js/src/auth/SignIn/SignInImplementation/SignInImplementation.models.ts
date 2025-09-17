import { type RequestContextModel } from '@lib/config/api/api.models';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type SignInUserUpdateModel } from '@lib/model/auth/SignIn/SignInUserUpdate/SignInUserUpdate.models';
import { type SignInUserUpdateInputModel } from '@lib/model/auth/SignIn/SignInUserUpdateInput/SignInUserUpdateInput.model';

export type SignInImplementationModel = {
  signIn(input: SignInInputModel): Promise<SignInModel>;

  userUpdate(
    input: SignInUserUpdateInputModel,
    context?: RequestContextModel,
  ): Promise<SignInUserUpdateModel>;

  usernameUpdate(input: SignInInputModel, context?: RequestContextModel): Promise<SignInModel>;

  verifyToken(input: string): Promise<SignInModel>;
};
