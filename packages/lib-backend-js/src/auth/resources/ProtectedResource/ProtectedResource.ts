import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { User } from '@lib/backend/user/resources/User/User';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { PROPERTY_TYPE } from '@lib/shared/data/data.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isAbstract: true })
export class ProtectedResource extends EntityResource implements ProtectedResourceModel {
  @withField({
    Resource: () => User,
    isDatabase: true,
    isOptional: true,
    name: '_user',
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  _user?: UserModel;

  @withField({
    Resource: () => Group,
    isDatabase: true,
    isOptional: true,
    name: '_group',
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  _group?: GroupModel;
}
