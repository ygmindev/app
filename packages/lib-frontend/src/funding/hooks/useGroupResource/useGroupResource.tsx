import { useProtectedResource } from '#lib-frontend/auth/hooks/useProtectedResource/useProtectedResource';
import { GROUP_FIELDS } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource.constants';
import { type UseGroupResourceModel } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource.models';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';

export const useGroupResource = (): UseGroupResourceModel =>
  useProtectedResource<GroupModel, GroupFormModel>({
    fields: [{ result: GROUP_FIELDS }],
    name: GROUP_RESOURCE_NAME,
  });
