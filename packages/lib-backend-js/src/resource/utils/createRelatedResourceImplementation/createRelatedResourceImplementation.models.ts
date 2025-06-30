import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type ClassModel, type KeysOfTypeModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateRelatedResourceImplementationParamsModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TRoot>,
  'count' | keyof ResourceImplementationModel<TType, TRoot>
> & {
  RootImplementation: ClassModel<EntityResourceImplementationModel<TRoot>>;
  name: KeysOfTypeModel<TRoot, CollectionModel<TType>>;
  root: KeysOfTypeModel<TType, RefFieldModel<TRoot> | CollectionModel<TType>>;
};

export type CreateRelatedResourceImplementationModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = ClassModel<ResourceImplementationModel<TType, TRoot>>;
