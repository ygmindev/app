import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type RoleModel } from '@lib/model/auth/Role/Role.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { Group } from '@lib/model/group/Group/Group.entity';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withDatabaseEntity({ name: ROLE_RESOURCE_NAME })
export class Role extends EntityResource implements RoleModel {
  @withManyToOneField({ Resource: () => Group })
  [GROUP_RESOURCE_NAME]?: RefModel<GroupModel>;

  @withDatabaseField({ isOptional: true })
  name?: string;
}

export default Role;
