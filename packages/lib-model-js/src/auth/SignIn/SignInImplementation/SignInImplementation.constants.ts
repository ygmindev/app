import { type UserModel } from '@lib/model/user/User/User.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export const JWT_CLAIM_KEYS = ['_id', 'callingCode', 'email', 'phone'] satisfies Array<
  StringKeyModel<UserModel>
>;
