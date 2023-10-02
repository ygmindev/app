import { type CreateResourceServiceParamsModel } from '#lib-backend/resource/utils/createResourceService/createResourceService.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type CreateEmbeddedResourceServiceParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
  TRootForm,
> = Omit<
  CreateResourceServiceParamsModel<TType, TForm, TRoot>,
  'count' | keyof ResourceServiceModel<TType, TForm, TRoot>
> & {
  RootService: ClassModel<EntityResourceServiceModel<TRoot, TRootForm>>;
};

export type CreateEmbeddedResourceServiceModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ClassModel<EmbeddedResourceServiceModel<TType, TForm, TRoot>>;
