import type { ACCESS_LEVEL, ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export interface AccessModel extends EntityResourceModel {
  _uid: string;
  role: AccessRoleModel;
  user?: UserModel;
}

export interface AccessFormModel extends Pick<AccessModel, 'role'> {
  _uid: string;
}
