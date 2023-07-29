import { type CreateInputParamsModel } from '#lib-backend/resource/utils/createInput/createInput.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type WithInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = undefined,
  TRoot = undefined,
> = CreateInputParamsModel<TMethod, TType, TForm, TRoot>;
