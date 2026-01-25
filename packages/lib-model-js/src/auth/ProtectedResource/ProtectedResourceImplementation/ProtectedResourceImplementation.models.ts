import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { GROUP_RESOURCE_NAME } from '@lib/model/group/Group/Group.constants';
import { type GroupModel } from '@lib/model/group/Group/Group.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type ProtectedResourceImplementationModel<TType extends ProtectedResourceModel> =
  EntityResourceImplementationModel<TType> & {
    getManyProtected: EntityResourceImplementationModel<TType>['getMany'];

    [GROUP_RESOURCE_NAME]?(self: TType): Promise<PartialModel<GroupModel> | null>;
  };
