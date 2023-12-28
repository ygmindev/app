import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Group } from '#lib-backend/group/resources/Group/Group';
import { type GroupResolverModel } from '#lib-backend/group/resources/Group/GroupResolver/GroupResolver.models';
import { GroupService } from '#lib-backend/group/resources/Group/GroupService/GroupService';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '#lib-backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import {
  type GroupFormModel,
  type GroupModel,
} from '#lib-shared/group/resources/Group/Group.models';

@withContainer()
@withResolver({ Resource: () => Group })
export class GroupResolver
  extends createProtectedResourceResolver<GroupModel, GroupFormModel>({
    Resource: () => Group,
    ResourceService: GroupService,
    name: GROUP_RESOURCE_NAME,
  })
  implements GroupResolverModel {}
