import { type ProtectedResourceServiceModel } from '#lib-shared/auth/resources/ProtectedResource/ProtectedResourceService/ProtectedResourceService.models';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';

export type GroupServiceModel = ProtectedResourceServiceModel<GroupModel, GroupFormModel>;
