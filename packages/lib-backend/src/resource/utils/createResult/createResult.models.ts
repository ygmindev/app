import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { type CreateRootParamsModel } from '#lib-backend/resource/utils/createRoot/createRoot.models';
import { type ClassModel } from '#lib-shared/core/core.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type ResultModel } from '#lib-shared/resource/utils/Result/Result.models';

export type CreateResultParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = {
  Resource: ClassModel<TType>;
  method: TMethod;
  name: string;
} & CreateRootParamsModel<TRoot>;

export type CreateResultModel<TMethod extends ResourceMethodTypeModel, TType> = ResourceClassModel<
  ResultModel<TMethod, TType>
>;
