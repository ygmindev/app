import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { User } from '#lib-backend/user/resources/User/User';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
  type AccessRoleModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';
import { type ResolvedFieldModel } from '#lib-shared/resource/resource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ name: `${ACCESS_RESOURCE_NAME}Form` })
export class AccessForm implements AccessFormModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  _user!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  role!: AccessRoleModel;
}

@withEntity({ isRepository: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withField({ isRepository: true, type: PROPERTY_TYPE.ID })
  _user!: string;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  role!: AccessRoleModel;

  @withField({ Resource: User, isOptional: true, type: PROPERTY_TYPE.RESOURCE })
  user?: ResolvedFieldModel<UserModel>;
}
