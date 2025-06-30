import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel, type PartialModel } from '@lib/shared/core/core.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UserStateModel = {
  currentUser?: PartialModel<UserModel>;
};

export type UserActionsParamsModel = EmptyObjectModel;

export type UserReducerModel = ReducerModel<UserStateModel, UserActionsParamsModel>;
