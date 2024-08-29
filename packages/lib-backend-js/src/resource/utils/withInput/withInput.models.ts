import { type CreateInputParamsModel } from '@lib/backend/resource/utils/createInput/createInput.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type WithInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateInputParamsModel<TMethod, TType, TForm>;

export type WithInputModel = ParameterDecorator;
