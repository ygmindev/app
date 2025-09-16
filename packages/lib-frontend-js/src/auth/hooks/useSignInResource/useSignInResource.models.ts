import { type SignInInputModel } from '@lib/model/auth/SignIn/SignInInput/SignInInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type UseSignInResourceModel = {
  setAuth(token?: string, user?: Partial<UserModel>): Promise<void>;

  signIn(input: SignInInputModel): Promise<void>;

  signOut(): Promise<void>;

  userUpdate(input: ResourceInputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel>): Promise<void>;

  usernameUpdate(input: SignInInputModel): Promise<void>;

  verifyToken(input: string): Promise<void>;
};
