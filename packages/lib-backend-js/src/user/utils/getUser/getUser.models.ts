import { type UserModel } from '@lib/model/user/User/User.models';

export type GetUserParamsModel = string;

export type GetUserModel = Partial<UserModel> | null;
