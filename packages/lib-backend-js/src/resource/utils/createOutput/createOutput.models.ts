import { type GetConnectionModel } from '@lib/backend/database/utils/getConnection/getConnection.models';
import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type CreateRootParamsModel } from '@lib/backend/resource/utils/createRoot/createRoot.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
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
> = ResourceClassModel<
  OutputModel<
    TMethod,
    TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType,
    TRoot
  >
>;
