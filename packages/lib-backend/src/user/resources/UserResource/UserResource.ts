import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { User } from '#lib-backend/user/resources/User/User';
import { PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { UserModel } from '#lib-shared/user/resources/User/User.models';
import { type UserResourceModel } from '#lib-shared/user/resources/UserResource/UserResource.models';

@withEntity({ isAbstract: true })
export class UserResource extends EntityResource implements UserResourceModel {
  @withField({
    Resource: () => User,
    isRepository: true,
    name: USER_RESOURCE_NAME,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [USER_RESOURCE_NAME]!: UserModel;
}
