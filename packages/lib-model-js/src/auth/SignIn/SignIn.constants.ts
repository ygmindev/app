import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const SIGN_IN_RESOURCE_NAME = 'SignIn';

export const SIGN_IN_USERNAME_UPDATE = `${SIGN_IN_RESOURCE_NAME}Username${RESOURCE_METHOD_TYPE.UPDATE}`;

export const SIGN_IN_USER_UPDATE = `${SIGN_IN_RESOURCE_NAME}${USER_RESOURCE_NAME}${RESOURCE_METHOD_TYPE.UPDATE}`;

export const SIGN_IN_TOKEN_CLAIM_KEYS: Array<StringKeyModel<UserModel>> = [
  '_id',
  'email',
  'phone',
  'first',
  'last',
];
