import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { GROUP_RESOURCE_NAME } from '@lib/shared/group/resources/Group/Group.constants';
import { type GroupModel } from '@lib/shared/group/resources/Group/Group.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type ProtectedResourceImplementationModel<
  TType extends ProtectedResourceModel,
  TForm = EntityResourceDataModel<TType>,
> = EntityResourceImplementationModel<TType, TForm> & {
  [GROUP_RESOURCE_NAME]?(self: TType): Promise<PartialModel<GroupModel> | null>;

  getManyProtected: EntityResourceImplementationModel<TType, TForm>['getMany'];
};
