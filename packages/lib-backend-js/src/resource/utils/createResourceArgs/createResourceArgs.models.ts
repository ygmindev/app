import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';

export type CreateResourceArgsParamsModel<TMethod extends RESOURCE_METHOD_TYPE, TType> = {
  Resource?(): ResourceClassModel<TType>;
  method?: TMethod;
  name: string;
};

export type CreateResourceArgsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceClassModel<ResourceArgsModel<TMethod, TType, TRoot>>;
