import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ClassModel, type KeysOfTypeModel } from '@lib/shared/core/core.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEmbeddedResourceImplementationParamsModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TRoot>,
  'count' | keyof ResourceImplementationModel<TType, TRoot>
> & {
  RootImplementation: ClassModel<EntityResourceImplementationModel<TRoot>>;
  name: KeysOfTypeModel<TRoot, Array<RefModel<TType>>>;
};

export type CreateEmbeddedResourceImplementationModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = ClassModel<ResourceImplementationModel<TType, TRoot>>;
