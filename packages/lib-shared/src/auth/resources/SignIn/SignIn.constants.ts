import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const SIGN_IN_RESOURCE_NAME = 'SignIn';

export const SIGN_IN_UPDATE = `SignIn${RESOURCE_METHOD_TYPE.UPDATE}`;

export const SIGN_IN_TOKEN_CLAIM_KEYS: Array<keyof EntityResourceDataModel<UserModel>> = [
  'email',
  'phone',
  'first',
  'last',
];
