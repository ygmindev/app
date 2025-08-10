import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ACCESS_RESOURCE_NAME, ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type AccessModel } from '@lib/model/auth/Access/Access.models';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { Group } from '@lib/model/group/Group/Group';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { GroupModel } from '@lib/model/group/Group/Group.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { User } from '@lib/model/user/User/User';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withManyToOneField({ Resource: () => Group })
  [GROUP_RESOURCE_NAME]?: RefModel<GroupModel>;

  @withField({ isArray: true, isDatabase: true, type: DATA_TYPE.STRING })
  [ROLE_RESOURCE_NAME]!: Array<ACCESS_ROLE>;

  @withManyToOneField({ Resource: () => User })
  [USER_RESOURCE_NAME]!: RefModel<UserModel>;
}
