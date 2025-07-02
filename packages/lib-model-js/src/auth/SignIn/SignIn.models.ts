import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type SignInModel = {
  isNew?: boolean;

  token?: string;

  user: RefModel<UserModel>;
};

export type SignInTokenModel = {
  _id: string;

  claims: Partial<UserModel>;
};
