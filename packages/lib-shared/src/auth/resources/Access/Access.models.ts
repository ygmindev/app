import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { type GroupModel } from '#lib-shared/funding/resources/Group/Group.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = EntityResourceModel & {
  group: GroupModel;
  role: Array<AccessRoleModel>;
  user: UserModel;
};

export type AccessFormModel = EntityResourceDataModel<AccessModel>;
