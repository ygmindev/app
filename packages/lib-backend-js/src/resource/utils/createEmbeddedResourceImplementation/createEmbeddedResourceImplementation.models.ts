import { type CreateResourceImplementationParamsModel } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation.models';
import { type ClassModel } from '@lib/shared/core/core.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type CreateEmbeddedResourceImplementationParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
> = Omit<
  CreateResourceImplementationParamsModel<TType, TForm, TRoot>,
  'count' | keyof ResourceImplementationModel<TType, TForm, TRoot>
> & {
  RootImplementation: ClassModel<EntityResourceImplementationModel<TRoot, TRootForm>>;
};

export type CreateEmbeddedResourceImplementationModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ClassModel<EmbeddedResourceImplementationModel<TType, TForm, TRoot>>;
