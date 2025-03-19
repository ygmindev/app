import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type ClassModel, type KeysOfTypeModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEmbeddedResourceImplementationParamsModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TForm, TRoot>,
  'count' | keyof ResourceImplementationModel<TType, TForm, TRoot>
> & {
  RootImplementation: ClassModel<EntityResourceImplementationModel<TRoot, TRootForm>>;
  name: KeysOfTypeModel<TRoot, Array<TType>>;
};

export type CreateEmbeddedResourceImplementationModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ClassModel<ResourceImplementationModel<TType, TForm, TRoot>>;
