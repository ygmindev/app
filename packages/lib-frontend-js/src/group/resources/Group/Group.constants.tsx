import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export const GROUP_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'logo' }, { id: 'types' }],
  name: GROUP_RESOURCE_NAME,
} satisfies ResourceParamsModel<GroupModel>;
