import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { Group } from '@lib/model/group/Group/Group.entity';
import { GroupImplementation } from '@lib/model/group/Group/GroupImplementation/GroupImplementation';
import { type GroupResolverModel } from '@lib/model/group/Group/GroupResolver/GroupResolver.models';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';

@withContainer()
@withResolver({ Resource: () => Group })
export class GroupResolver
  extends createEntityResourceResolver<GroupModel>({
    Resource: () => Group,
    ResourceImplementation: GroupImplementation,
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupResolverModel {}
