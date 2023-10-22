import { type ReducerModel } from '#lib-frontend/state/state.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';

export type GroupStateModel = {
  currentGroup?: PartialModel<GroupModel>;
};

export type GroupActionsParamsModel = {
  currentGroupSet: PartialModel<GroupModel>;

  currentGroupUpdate: PartialModel<GroupModel>;
};

export type GroupReducerModel = ReducerModel<GroupStateModel, GroupActionsParamsModel>;
