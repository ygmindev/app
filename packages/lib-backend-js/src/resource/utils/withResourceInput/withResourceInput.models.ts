import { type CreateResourceInputParamsModel } from '@lib/backend/resource/utils/createResourceInput/createResourceInput.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type WithResourceInputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
> = CreateResourceInputParamsModel<TMethod, TType>;

export type WithResourceInputModel = ParameterDecorator;
