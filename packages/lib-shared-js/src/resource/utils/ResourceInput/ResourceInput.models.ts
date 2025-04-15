import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ResourceArgsModel } from '@lib/shared/resource/utils/ResourceArgs/ResourceArgs.models';

export type ResourceInputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = ResourceArgsModel<TMethod, TType, TRoot>;
