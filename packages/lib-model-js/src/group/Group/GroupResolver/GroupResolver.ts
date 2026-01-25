import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { Group } from '@lib/model/group/Group/Group.entity';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { GroupImplementation } from '@lib/model/group/Group/GroupImplementation/GroupImplementation';
import { type GroupResolverModel } from '@lib/model/group/Group/GroupResolver/GroupResolver.models';

@withContainer()
@withResolver({ Resource: () => Group })
export class GroupResolver
  extends createResourceResolver<GroupModel>({
    Resource: () => Group,
    ResourceImplementation: GroupImplementation,
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupResolverModel {}
