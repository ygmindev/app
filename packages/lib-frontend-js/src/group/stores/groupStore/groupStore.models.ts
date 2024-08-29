import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel, type PartialModel } from '@lib/shared/core/core.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export type GroupStateModel = {
  currentGroup?: PartialModel<GroupModel>;
};

export type GroupActionsParamsModel = EmptyObjectModel;

export type GroupReducerModel = ReducerModel<GroupStateModel, GroupActionsParamsModel>;
