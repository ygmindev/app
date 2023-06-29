import { type ReducerModel } from '#lib-frontend/state/state.models';
import {
  type EntityResourceDataModel,
  type EntityResourcePartialModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UserStateModel = {
  currentUser?: EntityResourcePartialModel<UserModel> | null;
};

export type UserActionsParamsModel = {
  currentUserSet: EntityResourcePartialModel<UserModel> | null;

  currentUserUpdate: EntityResourceDataModel<UserModel>;
};

export type UserReducerModel = ReducerModel<UserStateModel, UserActionsParamsModel>;
