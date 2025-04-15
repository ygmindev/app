import { Role } from '@lib/backend/auth/resources/Role/Role';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { GroupImplementation } from '@lib/backend/group/resources/Group/GroupImplementation/GroupImplementation';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { RoleModel } from '@lib/shared/auth/resources/Role/Role.models';
import { type RoleImplementationModel } from '@lib/shared/auth/resources/Role/RoleImplementation/RoleImplementation.models';
import { GroupModel } from '@lib/shared/group/resources/Group/Group.models';

@withContainer()
export class RoleImplementation
  extends createRelatedResourceImplementation<RoleModel, GroupModel>({
    Resource: Role,
    RootImplementation: GroupImplementation,
    name: ROLE_RESOURCE_NAME,
    root: 'Group',
  })
  implements RoleImplementationModel {}
