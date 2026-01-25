import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

export type UseRoleResourceModel = UseResourceModel<RoleModel, GroupModel>;
