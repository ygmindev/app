import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const SIGN_IN_RESOURCE_NAME = 'SignIn';

export const SIGN_IN_USER = `${SIGN_IN_RESOURCE_NAME}${USER_RESOURCE_NAME}`;

export const SIGN_IN_USERNAME = `${SIGN_IN_RESOURCE_NAME}Username`;

export const SIGN_IN_TOKEN_CLAIM_KEYS: Array<keyof EntityResourceDataModel<UserModel>> = [
  'email',
  'phone',
  'first',
  'last',
];
