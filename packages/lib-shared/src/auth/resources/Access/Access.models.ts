import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
} from '#lib-shared/auth/resources/Access/Access.constants';
import { type GROUP_RESOURCE_NAME } from '#lib-shared/group/resources/Group/Group.constants';
import { type GroupModel } from '#lib-shared/group/resources/Group/Group.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserResourceModel } from '#lib-shared/user/resources/UserResource/UserResource.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = UserResourceModel & {
  [GROUP_RESOURCE_NAME]: GroupModel;

  role: Array<AccessRoleModel>;
};

export type AccessFormModel = EntityResourceDataModel<AccessModel>;
