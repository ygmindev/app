import type { ResultParamsModel } from '#lib-backend/resource/utils/Result/Result.models';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type OutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = ResultParamsModel<TMethod, TType, TRoot>;
