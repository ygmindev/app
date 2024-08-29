import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UseCurrentUserModel = PartialModel<UserModel> | null | undefined;
