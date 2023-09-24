import { type ReducerModel } from '#lib-frontend/state/state.models';
import { type PartialModel } from '#lib-shared/core/core.models';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type GroupStateModel = {
  currentGroup?: EntityResourcePartialModel<GroupModel>;
};

export type GroupActionsParamsModel = {
  currentGroupSet: EntityResourcePartialModel<GroupModel>;

  currentGroupUpdate: PartialModel<EntityResourcePartialModel<GroupModel>>;
};

export type GroupReducerModel = ReducerModel<GroupStateModel, GroupActionsParamsModel>;