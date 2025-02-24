import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import {
  type ACCESS_LEVEL,
  type ACCESS_ROLE,
  type ACCESS_ROLE_MORE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { type ROLE_RESOURCE_NAME } from '@lib/shared/auth/resources/Role/Role.constants';
import { type GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type AccessRoleModel = `${ACCESS_ROLE}`;

export type AccessRoleMoreModel = `${ACCESS_ROLE_MORE}`;

export type AccessLevelModel = `${ACCESS_LEVEL}`;

export type AccessModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  [ROLE_RESOURCE_NAME]: Array<AccessRoleMoreModel>;

  [USER_RESOURCE_NAME]: RefFieldModel<UserModel>;
};

export type AccessFormModel = EntityResourceDataModel<AccessModel>;
