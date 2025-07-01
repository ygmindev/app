import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';

export type ResourceInputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceArgsModel<TMethod, TType, TRoot>;
