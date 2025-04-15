import { type CreateResourceInputParamsModel } from '@lib/backend/resource/utils/createResourceInput/createResourceInput.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export type WithResourceInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
> = CreateResourceInputParamsModel<TMethod, TType>;

export type WithResourceInputModel = ParameterDecorator;
