import { type ResourceInputParamsModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type WithResourceInputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
> = ResourceInputParamsModel<TMethod, TType>;

export type WithResourceInputModel = ParameterDecorator;
