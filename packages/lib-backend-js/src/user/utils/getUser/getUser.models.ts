import { type EntityResourcePartialModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type GetUserParamsModel = string;

export type GetUserModel = EntityResourcePartialModel<UserModel> | null;
