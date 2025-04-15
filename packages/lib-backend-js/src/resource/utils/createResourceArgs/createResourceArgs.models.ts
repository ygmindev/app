import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';

export type CreateResourceArgsParamsModel<TMethod extends ResourceMethodTypeModel, TType> = {
  Resource?(): ResourceClassModel<TType>;
  method?: TMethod;
  name: string;
};

export type CreateResourceArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
