import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ProtectedResourceModel = EntityResourceModel & {
  _group?: RefFieldModel<GroupModel>;

  _user?: RefFieldModel<UserModel>;
};
