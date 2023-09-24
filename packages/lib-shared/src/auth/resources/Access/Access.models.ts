import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { type GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '#lib-shared/user/resources/User/User.constants';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]: GroupModel;
  [USER_RESOURCE_NAME]: UserModel;
  role: Array<AccessRoleModel>;
};

export type AccessFormModel = EntityResourceDataModel<AccessModel>;
