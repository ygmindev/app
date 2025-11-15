import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ACCESS_RESOURCE_NAME, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { Group } from '@lib/model/group/Group/Group.entity';
import { GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';

@withDatabaseEntity({ name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withManyToOneField({ Resource: () => Group, isOptional: true })
  [GROUP_RESOURCE_NAME]?: RefModel<GroupModel>;

  @withDatabaseField({ isArray: true })
  [ROLE_RESOURCE_NAME]!: Array<ACCESS_ROLE>;

  @withManyToOneField({ Resource: () => User })
  [USER_RESOURCE_NAME]!: RefModel<UserModel>;
}

export default Access;
