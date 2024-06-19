import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export const ROLE_RESOURCE_PARAMS = {
  fields: [{ id: GROUP_RESOURCE_NAME }, { id: '_id' }, { id: 'name' }],
  name: ROLE_RESOURCE_NAME,
} satisfies ResourceParamsModel<RoleModel, GroupModel>;
