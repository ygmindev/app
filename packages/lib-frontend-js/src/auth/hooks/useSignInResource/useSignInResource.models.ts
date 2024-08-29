import { type SignInFormModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type UserFormModel, type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseSignInResourceModel = {
  signIn(form: SignInFormModel): Promise<void>;

  signOut(): Promise<void>;

  userUpdate(
    input?: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel>,
  ): Promise<void>;

  usernameUpdate(form: SignInFormModel): Promise<void>;
};
