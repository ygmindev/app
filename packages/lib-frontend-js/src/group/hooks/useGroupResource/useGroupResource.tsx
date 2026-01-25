import { type UseGroupResourceModel } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource.models';
import { GROUP_RESOURCE_PARAMS } from '@lib/frontend/group/resources/Group/Group.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const useGroupResource = (): UseGroupResourceModel =>
  useResource<GroupModel>({
    ...GROUP_RESOURCE_PARAMS,
  });
