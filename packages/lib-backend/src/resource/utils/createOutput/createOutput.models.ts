import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type CreateRootParamsModel } from '@lib/backend/resource/utils/createRoot/createRoot.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type CreateOutputParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = CreateRootParamsModel<TRoot> & {
  Resource(): ResourceClassModel<TType>;
  method: TMethod;
  name: string;
};

export type CreateOutputModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = ResourceClassModel<OutputModel<TMethod, TType, TRoot>>;
