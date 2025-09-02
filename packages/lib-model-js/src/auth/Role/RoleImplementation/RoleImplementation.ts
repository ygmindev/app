import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEmbeddedResourceImplementation } from '@lib/backend/resource/utils/createEmbeddedResourceImplementation/createEmbeddedResourceImplementation';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { Role } from '@lib/model/auth/Role/Role.entity';
import { RoleModel } from '@lib/model/auth/Role/Role.models';
import { type RoleImplementationModel } from '@lib/model/auth/Role/RoleImplementation/RoleImplementation.models';
import { GroupModel } from '@lib/model/group/Group/Group.models';
import { GroupImplementation } from '@lib/model/group/Group/GroupImplementation/GroupImplementation';

@withContainer()
export class RoleImplementation
  extends createEmbeddedResourceImplementation<RoleModel, GroupModel>({
    Resource: Role,
    RootImplementation: GroupImplementation,
    name: ROLE_RESOURCE_NAME,
  })
  implements RoleImplementationModel {}
