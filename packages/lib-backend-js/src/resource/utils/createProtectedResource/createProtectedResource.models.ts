import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type WithManyToOneFieldParamsModel } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type CreateProtectedResourceParamsModel = Pick<
  WithManyToOneFieldParamsModel<UserModel & GroupModel>,
  'isDatabase' | 'mappedBy'
>;

export type CreateProtectedResourceModel = ResourceClassModel<ProtectedResourceModel>;
