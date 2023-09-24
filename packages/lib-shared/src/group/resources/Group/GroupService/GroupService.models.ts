import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type GroupServiceModel = EntityResourceServiceModel<GroupModel, GroupFormModel>;