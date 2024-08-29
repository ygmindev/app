import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UserInputPropsModel = InputPropsModel<PartialModel<UserModel>>;

export type UserInputRefModel = InputRefModel<PartialModel<UserModel>>;
