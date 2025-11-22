import { SIGN_IN_USER_UPDATE } from '@lib/model/auth/SignIn/SignIn.constants';
import { ResourceInput } from '@lib/model/resource/ResourceInput/ResourceInput';
import User from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const SignInUserUpdateInput = ResourceInput<RESOURCE_METHOD_TYPE.UPDATE, UserModel>({
  Resource: () => User,
  method: RESOURCE_METHOD_TYPE.UPDATE,
  name: `${SIGN_IN_USER_UPDATE}Input`,
});
