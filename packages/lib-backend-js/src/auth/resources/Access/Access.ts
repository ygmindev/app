import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { User } from '@lib/backend/user/resources/User/User';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  type AccessModel,
  AccessRoleMoreModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withRefField({ Resource: () => Group, isOptional: true })
  _group?: RefFieldModel<Group>;

  @withRefField({ Resource: () => User })
  _user!: RefFieldModel<User>;

  @withField({ isArray: true, isDatabase: true, type: DATA_TYPE.STRING })
  role!: Array<AccessRoleMoreModel>;
}
