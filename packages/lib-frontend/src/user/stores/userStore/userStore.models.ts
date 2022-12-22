import type { ReducerModel } from '@lib/frontend/state/state.models';
import type {
  EntityResourceDataModel,
  EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface UserStateModel {
  currentUser?: EntityResourcePartialModel<UserModel> | null;
}

export interface UserActionsParamsModel {
  currentUserSet: EntityResourcePartialModel<UserModel> | null;

  currentUserUpdate: EntityResourceDataModel<UserModel>;
}

export interface UserReducerModel extends ReducerModel<UserStateModel, UserActionsParamsModel> {}
