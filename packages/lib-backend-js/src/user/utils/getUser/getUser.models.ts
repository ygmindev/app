import { type EntityResourcePartialModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type GetUserParamsModel = string;

export type GetUserModel = EntityResourcePartialModel<UserModel> | null;
