import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type WithManyToOneFieldParamsModel } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField.models';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type CreateProtectedResourceParamsModel = Pick<
  WithManyToOneFieldParamsModel<UserModel & GroupModel>,
  'isDatabase'
>;

export type CreateProtectedResourceModel = ResourceClassModel<ProtectedResourceModel>;
