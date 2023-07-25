import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type EntityResourceServiceModel<TType, TForm = undefined> = ResourceServiceModel<
  TType,
  TForm
>;
