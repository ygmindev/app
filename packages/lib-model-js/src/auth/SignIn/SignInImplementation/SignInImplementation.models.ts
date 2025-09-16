import { type RequestContextModel } from '@lib/config/api/api.models';
import { type SignInModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type SignInUserUpdateInputModel = ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel>;

export type SignInImplementationModel = {
  signIn(input: SignInInputModel): Promise<SignInModel>;

  userUpdate(
    input: SignInUserUpdateInputModel,
    context?: RequestContextModel,
  ): Promise<SignInModel>;

  usernameUpdate(input: SignInInputModel, context?: RequestContextModel): Promise<SignInModel>;

  verifyToken(input: string): Promise<SignInModel>;
};
