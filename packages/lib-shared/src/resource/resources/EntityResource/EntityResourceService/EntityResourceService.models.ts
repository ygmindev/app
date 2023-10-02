import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type EntityResourceServiceModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = ResourceServiceModel<TType, TForm>;
