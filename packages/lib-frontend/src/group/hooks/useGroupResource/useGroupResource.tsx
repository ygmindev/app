import { useProtectedResource } from '@lib/frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { type UseGroupResourceModel } from '@lib/frontend/group/hooks/useGroupResource/useGroupResource.models';
import { GROUP_RESOURCE_PARAMS } from '@lib/frontend/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '@lib/shared/group/resources/Group/Group.models';

export const useGroupResource = (): UseGroupResourceModel =>
  useProtectedResource<GroupModel, GroupFormModel>({
    ...GROUP_RESOURCE_PARAMS,
  });
