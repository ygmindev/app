import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { type CreateArgsParamsModel } from '#lib-backend/resource/utils/createArgs/createArgs.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';

export type CreateInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = undefined,
  TRoot = undefined,
> = CreateArgsParamsModel<TMethod, TType, TForm, TRoot>;

export type CreateInputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = undefined,
  TRoot = undefined,
> = ResourceClassModel<InputModel<TMethod, TType, TForm, TRoot>>;
