import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const ROLE_RESOURCE_PARAMS = {
  fields: [{ id: 'Group' }, { id: 'name' }],
  name: ROLE_RESOURCE_NAME,
} satisfies ResourceParamsModel<RoleModel, GroupModel>;
