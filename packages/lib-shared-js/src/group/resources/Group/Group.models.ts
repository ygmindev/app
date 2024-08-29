import { type ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GROUP_TYPE } from '@lib/shared/group/resources/Group/Group.constants';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type GroupModel = EntityResourceModel & {
  [ROLE_RESOURCE_NAME]?: Array<RoleModel>;

  logo?: string;

  name: string;

  types?: Array<GroupTypeModel>;
};

export type GroupFormModel = EntityResourceDataModel<GroupModel>;

export type GroupTypeModel = `${GROUP_TYPE}`;
