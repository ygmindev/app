import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type SignInModel = {
  isNew?: boolean;
  token?: string;
  user: PartialModel<UserModel>;
};

export type SignInTokenModel = {
  _id: string;
  claims: PartialModel<UserModel>;
};
