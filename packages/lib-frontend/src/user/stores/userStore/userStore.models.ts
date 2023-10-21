import { type ReducerModel } from '#lib-frontend/state/state.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UserStateModel = {
  currentUser?: PartialModel<UserModel> | null;
};

export type UserActionsParamsModel = {
  currentUserSet: PartialModel<UserModel> | null;

  currentUserUpdate: PartialModel<UserModel>;
};

export type UserReducerModel = ReducerModel<UserStateModel, UserActionsParamsModel>;
