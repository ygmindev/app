import {
  type ResourceServiceModel,
  type ResourceServiceParamsModel,
} from '#lib-shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type EntityResourceServiceParamsModel<TType, TForm> = ResourceServiceParamsModel<
  TType,
  TForm,
  undefined
>;

export type EntityResourceServiceModel<TType, TForm> = ResourceServiceModel<TType, TForm>;
