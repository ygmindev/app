import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type RoleModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]?: RefModel<GroupModel>;

  name?: string;
};
