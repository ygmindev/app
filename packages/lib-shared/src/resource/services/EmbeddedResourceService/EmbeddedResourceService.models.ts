import { type ResourceServiceModel } from '#lib-shared/resource/services/ResourceService/ResourceService.models';

export type EmbeddedResourceServiceModel<TType, TForm, TRoot> = ResourceServiceModel<
  TType,
  TForm,
  TRoot
>;
