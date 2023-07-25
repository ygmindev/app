import { type ClassModel } from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import { type ResourceServiceDecoratorModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type CreateEntityResourceServiceParamsModel<
  TType,
  TForm = undefined,
> = ResourceNameParamsModel<undefined> & ResourceServiceDecoratorModel<TType, TForm, undefined>;

export type CreateEntityResourceServiceModel<TType, TForm = undefined> = ClassModel<
  EntityResourceServiceModel<TType, TForm>
>;
