import { type WithAccessParamsModel } from '#lib-backend/resource/decorators/withAccess/withAccess.models';
import { type OutputParamsModel } from '#lib-backend/resource/utils/Output/Output.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type WithOutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = WithAccessParamsModel & OutputParamsModel<TMethod, TType, TRoot>;
