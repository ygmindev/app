import { type UseRoleResourceModel } from '@lib/frontend/auth/hooks/useRoleResource/useRoleResource.models';
import { ROLE_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Role/Role.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export const useRoleResource = (): UseRoleResourceModel =>
  useResource<RoleModel, GroupModel>({
    ...ROLE_RESOURCE_PARAMS,
  });
