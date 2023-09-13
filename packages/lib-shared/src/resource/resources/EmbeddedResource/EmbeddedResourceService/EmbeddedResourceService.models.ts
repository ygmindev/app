import { type ResourceServiceModel } from '#lib-shared/resource/utils/ResourceService/ResourceService.models';

export type EmbeddedResourceServiceModel<TType, TForm, TRoot> = ResourceServiceModel<
  TType,
  TForm,
  TRoot
>;
