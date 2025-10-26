import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type UseCurrentUserParamsModel = { isProtected?: boolean };

export type UseCurrentUserModel = PartialModel<UserModel> | null | undefined;
