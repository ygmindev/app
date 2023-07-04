import { type ClassModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/services/EmbeddedResourceService/EmbeddedResourceService.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import { type ResourceServiceDecoratorModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type CreateEmbeddedResourceServiceParamsModel<TType, TForm, TRoot, TRootorm> =
  ResourceNameParamsModel<TRoot> &
    ResourceServiceDecoratorModel<TType, TForm, TRoot> & {
      Resource: ClassModel<TType>;
      RootService: ClassModel<EntityResourceServiceModel<TRoot, TRootorm>>;
    };

export type CreateEmbeddedResourceServiceModel<TType, TForm, TRoot> = ClassModel<
  EmbeddedResourceServiceModel<TType, TForm, TRoot>
>;
