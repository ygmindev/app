import { GROUP_FIELDS } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource.constants';
import { type UseGroupResourceModel } from '#lib-frontend/funding/hooks/useGroupResource/useGroupResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { GROUP_RESOURCE_NAME } from '#lib-shared/funding/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/funding/resources/Group/Group.models';

export const useGroupResource = (): UseGroupResourceModel =>
  useResource<GroupModel, GroupFormModel>({
    fields: [{ result: GROUP_FIELDS }],
    name: GROUP_RESOURCE_NAME,
  });
