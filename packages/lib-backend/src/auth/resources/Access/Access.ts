import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  type AccessModel,
  type AccessRoleModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { DATA_TYPE, PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { Ref } from '@mikro-orm/mongodb';

@withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  // [PrimaryKeyProp]?: ['_id', 'User', 'Group'];

  @withField({
    Resource: () => Group,
    isRepository: true,
    name: GROUP_RESOURCE_NAME,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [GROUP_RESOURCE_NAME]!: Ref<Group>;

  @withField({
    Resource: () => User,
    isRepository: true,
    name: USER_RESOURCE_NAME,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [USER_RESOURCE_NAME]!: Ref<User>;

  @withField({ isArray: true, isRepository: true, type: DATA_TYPE.STRING })
  role!: Array<AccessRoleModel>;
}
