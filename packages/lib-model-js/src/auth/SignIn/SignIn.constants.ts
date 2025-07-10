import { type UserModel } from '@lib/model/user/User/User.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export const SIGN_IN_RESOURCE_NAME = 'SignIn';

export const SIGN_IN_USERNAME = `${SIGN_IN_RESOURCE_NAME}Username`;

export const SIGN_IN_TOKEN_CLAIM_KEYS: Array<StringKeyModel<UserModel>> = [
  '_id',
  'email',
  'phone',
  'first',
  'last',
];
