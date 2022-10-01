import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  ResourceServiceModel,
  ResourceServiceParamsModel,
} from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export interface EmbeddedResourceServiceParamsModel<TType, TForm, TRoot, TRootForm>
  extends ResourceServiceParamsModel<TType, TForm, TRoot> {
  RootService: ConstructorModel<EntityResourceServiceModel<TRoot, TRootForm>>;
}

export interface EmbeddedResourceServiceModel<TType, TForm, TRoot>
  extends ResourceServiceModel<TType, TForm, TRoot> {}
