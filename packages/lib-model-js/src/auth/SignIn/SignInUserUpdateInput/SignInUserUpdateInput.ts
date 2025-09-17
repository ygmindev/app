import { createResourceInput } from '@lib/backend/resource/utils/createResourceInput/createResourceInput';
import { SIGN_IN_USER_UPDATE } from '@lib/model/auth/SignIn/SignIn.constants';
import User from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const SignInUserUpdateInput = createResourceInput<RESOURCE_METHOD_TYPE.UPDATE, UserModel>({
  Resource: () => User,
  method: RESOURCE_METHOD_TYPE.UPDATE,
  name: `${SIGN_IN_USER_UPDATE}Input`,
});
