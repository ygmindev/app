import { type ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
import { type GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export type AccessModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]?: GroupModel;

  [ROLE_RESOURCE_NAME]: Array<ACCESS_ROLE>;

  [USER_RESOURCE_NAME]: UserModel;
};
