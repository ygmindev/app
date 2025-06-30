import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UseCurrentUserParamsModel = { isProtected?: boolean };

export type UseCurrentUserModel = PartialModel<UserModel> | null | undefined;
