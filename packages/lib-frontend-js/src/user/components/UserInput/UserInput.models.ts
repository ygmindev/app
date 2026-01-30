import { type MenuOptionModel } from '@lib/frontend/core/components/Menu/Menu.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type UserInputPropsModel = InputPropsModel<PartialModel<UserModel>>;

export type UserInputRefModel = InputRefModel<PartialModel<UserModel>>;

export type UserOptionModel = MenuOptionModel & {
  user: PartialModel<UserModel>;
};
