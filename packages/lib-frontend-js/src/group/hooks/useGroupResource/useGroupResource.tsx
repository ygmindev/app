import { useProtectedResource } from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { type UseGroupResourceModel } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource.models';
import { GROUP_RESOURCE_PARAMS } from '@lib/frontend/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const useGroupResource = (): UseGroupResourceModel =>
  useProtectedResource<GroupModel>({
    ...GROUP_RESOURCE_PARAMS,
  });
