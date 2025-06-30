import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ProtectedResourceModel = EntityResourceModel & {
  // [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

  createdBy?: RefFieldModel<UserModel>;
};
