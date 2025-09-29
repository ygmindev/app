import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type UserStateModel = {
  currentUser?: PartialModel<UserModel>;
};

export type UserReducerModel = ReducerModel<UserStateModel>;
