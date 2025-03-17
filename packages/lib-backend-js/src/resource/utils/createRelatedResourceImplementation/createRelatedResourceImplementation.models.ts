import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type ClassModel, type KeysOfTypeModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type RelatedResourceImplementationModel } from '@lib/shared/resource/resources/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateRelatedResourceImplementationParamsModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TForm, TRoot>,
  'count' | keyof ResourceImplementationModel<TType, TForm, TRoot>
> & {
  RootImplementation: ClassModel<EntityResourceImplementationModel<TRoot, TRootForm>>;
  name: KeysOfTypeModel<TRoot, CollectionModel<TType>>;
  root: KeysOfTypeModel<TType, RefFieldModel<TRoot>>;
};

export type CreateRelatedResourceImplementationModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ClassModel<RelatedResourceImplementationModel<TType, TForm, TRoot>>;
