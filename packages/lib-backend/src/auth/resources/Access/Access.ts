import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { User } from '#lib-backend/user/resources/User/User';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
  type AccessRoleModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { type ResolvedFieldModel } from '#lib-shared/resource/resource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

@withEntity({ name: `${ACCESS_RESOURCE_NAME}Form` })
export class AccessForm implements AccessFormModel {
  @withField({ isRepository: true, type: FIELD_TYPE.ID })
  _uid!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  role!: AccessRoleModel;
}

@withEntity({ base: EntityResource, isRepository: true, name: ACCESS_RESOURCE_NAME })
export class Access extends EntityResource implements AccessModel {
  @withField({ isRepository: true, type: FIELD_TYPE.ID })
  _uid!: string;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  role!: AccessRoleModel;

  @withField({ Resource: User, isOptional: true })
  user?: ResolvedFieldModel<UserModel>;
}
