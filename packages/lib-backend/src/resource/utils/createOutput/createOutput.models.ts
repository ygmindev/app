import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { type CreateResultParamsModel } from '#lib-backend/resource/utils/createResult/createResult.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

export type CreateOutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = CreateResultParamsModel<TMethod, TType, TRoot>;

export type CreateOutputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = ResourceClassModel<OutputModel<TMethod, TType, TRoot>>;
