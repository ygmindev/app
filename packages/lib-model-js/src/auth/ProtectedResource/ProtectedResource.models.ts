import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ProtectedResourceModel = EntityResourceModel & {
  createdBy?: RefModel<UserModel>;
};
