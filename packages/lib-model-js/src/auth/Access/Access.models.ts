import { type ACCESS_ROLE } from '@lib/model/auth/Access/Access.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type AccessModel = EntityResourceModel & {
  group?: GroupModel;

  roles: Array<ACCESS_ROLE>;

  user: UserModel;
};
