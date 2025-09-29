import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type GroupStateModel = {
  currentGroup?: PartialModel<GroupModel>;
};

export type GroupReducerModel = ReducerModel<GroupStateModel>;
