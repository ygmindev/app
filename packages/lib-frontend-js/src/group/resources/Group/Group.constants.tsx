import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const GROUP_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'logo' }, { id: 'types' }],
  name: GROUP_RESOURCE_NAME,
} satisfies ResourceParamsModel<GroupModel>;
