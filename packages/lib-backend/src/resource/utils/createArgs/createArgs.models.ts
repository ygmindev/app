import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type ArgsModel } from '@lib/shared/resource/utils/Args/Args.models';

export type CreateArgsParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
> = {
  Resource?(): ResourceClassModel<TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType>;
  method: TMethod;
  name: string;
};

export type CreateArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = ResourceClassModel<ArgsModel<TMethod, TType, TForm, TRoot>>;
