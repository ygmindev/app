import { type InputParamsModel } from '#lib-backend/resource/utils/Input/Input.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type WithInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = InputParamsModel<TMethod, TType, TForm, TRoot>;
