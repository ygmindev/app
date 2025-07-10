import { type UserModel } from '@lib/model/user/User/User.models';

export type SignInModel = {
  isNew?: boolean;

  token?: string;

  user: Partial<UserModel>;
};

export type SignInTokenModel = Partial<UserModel>;
