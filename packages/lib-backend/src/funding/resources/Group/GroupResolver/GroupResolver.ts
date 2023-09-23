import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Group } from '#lib-backend/funding/resources/Group/Group';
import { type GroupResolverModel } from '#lib-backend/funding/resources/Group/GroupResolver/GroupResolver.models';
import { GroupService } from '#lib-backend/funding/resources/Group/GroupService/GroupService';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { GROUP_RESOURCE_NAME } from '#lib-shared/funding/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/funding/resources/Group/Group.models';

@withContainer()
@withResolver({ Resource: Group })
export class GroupResolver
  extends createEntityResourceResolver<GroupModel, GroupFormModel>({
    Resource: Group,
    ResourceService: GroupService,
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupResolverModel {}
