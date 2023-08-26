import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { type ResolvedFieldModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = EntityResourceModel & {
  _uid: string;
  role: AccessRoleModel;
  user?: ResolvedFieldModel<UserModel>;
};

export type AccessFormModel = {
  _uid: string;
} & Pick<AccessModel, 'role'>;
