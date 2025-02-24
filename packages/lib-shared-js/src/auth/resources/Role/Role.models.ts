import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type RoleModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  name?: string;
};

export type RoleFormModel = EntityResourceDataModel<RoleModel>;
