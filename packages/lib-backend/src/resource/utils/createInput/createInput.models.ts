import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type CreateArgsParamsModel } from '@lib/backend/resource/utils/createArgs/createArgs.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';

export type CreateInputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateArgsParamsModel<TMethod, TType, TForm>;

export type CreateInputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceClassModel<InputModel<TMethod, TType, TForm, TRoot>>;
