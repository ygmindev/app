import { type UseRoleResourceModel } from '@lib/frontend/auth/hooks/useRoleResource/useRoleResource.models';
import { ROLE_RESOURCE_PARAMS } from '@lib/frontend/auth/resources/Role/Role.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

export const useRoleResource = (): UseRoleResourceModel =>
  useResource<RoleModel, GroupModel>({
    ...ROLE_RESOURCE_PARAMS,
  });
