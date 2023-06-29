import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const SIGN_IN_TOKEN_CLAIM_FIELDS: Array<keyof EntityResourceDataModel<UserModel>> = [
  'email',
  'phone',
  'first',
  'last',
];
