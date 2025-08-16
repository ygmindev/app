import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { Role } from '@lib/model/auth/Role/Role.entity';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { RoleImplementation } from '@lib/model/auth/Role/RoleImplementation/RoleImplementation';
import { type RoleResolverModel } from '@lib/model/auth/Role/RoleResolver/RoleResolver.models';
import { Group } from '@lib/model/group/Group/Group.entity';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

@withContainer()
@withResolver({ Resource: () => Role })
export class RoleResolver
  extends createEmbeddedResourceResolver<RoleModel, GroupModel>({
    Resource: () => Role,
    ResourceImplementation: RoleImplementation,
    RootResource: () => Group,
    name: ROLE_RESOURCE_NAME,
  })
  implements RoleResolverModel {}
