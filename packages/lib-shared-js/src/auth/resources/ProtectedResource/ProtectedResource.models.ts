import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ProtectedResourceModel = EntityResourceModel & {
  [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  [USER_RESOURCE_NAME]?: RefFieldModel<UserModel>;
};
