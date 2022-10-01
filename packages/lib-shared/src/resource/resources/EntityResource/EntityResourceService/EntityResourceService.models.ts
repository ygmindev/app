import type {
  ResourceServiceModel,
  ResourceServiceParamsModel,
} from '@lib/shared/resource/utils/Resource/ResourceService/ResourceService.models';

export type EntityResourceServiceParamsModel<TType, TForm> = ResourceServiceParamsModel<
  TType,
  TForm,
  undefined
>;

export interface EntityResourceServiceModel<TType, TForm>
  extends ResourceServiceModel<TType, TForm> {}
