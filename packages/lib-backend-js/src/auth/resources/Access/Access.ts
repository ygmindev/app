import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  type AccessModel,
  AccessRoleMoreModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isDatabase: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withManyToOneField({ Resource: () => Group, mappedBy: ACCESS_RESOURCE_NAME })
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  @withField({ isArray: true, isDatabase: true, type: DATA_TYPE.STRING })
  [ROLE_RESOURCE_NAME]!: Array<AccessRoleMoreModel>;

  @withManyToOneField({ Resource: () => User, mappedBy: ACCESS_RESOURCE_NAME })
  [USER_RESOURCE_NAME]!: RefFieldModel<UserModel>;
}
