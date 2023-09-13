import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type EntityResourceServiceModel<TType, TForm = undefined> = ResourceServiceModel<
  TType,
  TForm
>;
