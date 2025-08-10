import {
  type CreateProtectedResourceModel,
  type CreateProtectedResourceParamsModel,
} from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { User } from '@lib/model/user/User/User';
import { type UserModel } from '@lib/model/user/User/User.models';

export const createProtectedResource = (
  { isDatabase = true }: CreateProtectedResourceParamsModel = { isDatabase: true },
): CreateProtectedResourceModel => {
  @withEntity({ isAbstract: true })
  class ProtectedResource extends EntityResource implements ProtectedResourceModel {
    // @withManyToOneField({ Resource: () => Group, isDatabase })
    // [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

    @withManyToOneField({ Resource: () => User, isDatabase })
    createdBy?: UserModel;
  }
  return ProtectedResource;
};
