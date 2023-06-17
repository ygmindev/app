import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  ResourceServiceModel,
  ResourceServiceParamsModel,
} from '#lib-shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type EmbeddedResourceServiceParamsModel<TType, TForm, TRoot, TRootForm> = {
  RootService: ConstructorModel<EntityResourceServiceModel<TRoot, TRootForm>>;
} & ResourceServiceParamsModel<TType, TForm, TRoot>;

export type EmbeddedResourceServiceModel<TType, TForm, TRoot> = ResourceServiceModel<
  TType,
  TForm,
  TRoot
>;
