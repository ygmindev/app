import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const ROLE_RESOURCE_PARAMS = {
  fields: [
    {
      fields: [{ id: '_id' }],
      id: GROUP_RESOURCE_NAME,
    },
    { id: 'name' },
  ],
  name: ROLE_RESOURCE_NAME,
} satisfies ResourceParamsModel<RoleModel, GroupModel>;
