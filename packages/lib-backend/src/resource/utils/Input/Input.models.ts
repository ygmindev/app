import { type ArgsParamsModel } from '#lib-backend/resource/utils/Args/Args.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type InputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = ArgsParamsModel<TMethod, TType, TForm, TRoot>;
