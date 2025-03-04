import { Group } from '@lib/backend/group/resources/Group/Group';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import {
  type CreateProtectedResourceModel,
  type CreateProtectedResourceParamsModel,
} from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource.models';
import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { User } from '@lib/backend/user/resources/User/User';
import { ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

export const createProtectedResource = (
  { isDatabase = true }: CreateProtectedResourceParamsModel = { isDatabase: true },
): CreateProtectedResourceModel => {
  @withEntity({ isAbstract: true })
  class ProtectedResource extends EntityResource implements ProtectedResourceModel {
    @withManyToOneField({ Resource: () => Group, isDatabase })
    [GROUP_RESOURCE_NAME]?: RefFieldModel<GroupModel>;

    @withManyToOneField({ Resource: () => User, isDatabase })
    [USER_RESOURCE_NAME]?: RefFieldModel<UserModel>;
  }
  return ProtectedResource;
};
