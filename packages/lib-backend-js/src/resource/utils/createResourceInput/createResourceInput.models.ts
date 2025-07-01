import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type CreateResourceArgsParamsModel } from '@lib/backend/resource/utils/createResourceArgs/createResourceArgs.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';

export type CreateResourceInputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
> = CreateResourceArgsParamsModel<TMethod, TType>;

export type CreateResourceInputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceClassModel<ResourceInputModel<TMethod, TType, TRoot>>;
