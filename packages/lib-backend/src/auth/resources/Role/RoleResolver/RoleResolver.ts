import { Role } from '@lib/backend/auth/resources/Role/Role';
import { RoleImplementation } from '@lib/backend/auth/resources/Role/RoleImplementation/RoleImplementation';
import { type RoleResolverModel } from '@lib/backend/auth/resources/Role/RoleResolver/RoleResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Group } from '@lib/backend/group/resources/Group/Group';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type RoleFormModel, type RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';

@withContainer()
@withResolver({ Resource: () => Role })
export class RoleResolver
  extends createEmbeddedResourceResolver<RoleModel, RoleFormModel, GroupModel>({
    Resource: () => Role,
    ResourceImplementation: RoleImplementation,
    RootResource: () => Group,
    name: ROLE_RESOURCE_NAME,
  })
  implements RoleResolverModel {}
