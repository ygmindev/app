import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ProtectedResourceModel = EntityResourceModel & {
  createdBy?: UserModel;
};
