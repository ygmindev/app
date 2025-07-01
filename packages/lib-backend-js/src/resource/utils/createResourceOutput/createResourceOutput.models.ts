import { type GetConnectionModel } from '@lib/backend/database/utils/getConnection/getConnection.models';
import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type CreateRootParamsModel } from '@lib/backend/resource/utils/createRoot/createRoot.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

export type CreateResourceOutputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = CreateRootParamsModel<TRoot> & {
  Resource(): ResourceClassModel<TType>;
  isArray?: boolean;
  method: TMethod;
  name: string;
};

export type CreateResourceResourceOutputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = ResourceClassModel<
  ResourceOutputModel<
    TMethod,
    TRoot,
    TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION ? GetConnectionModel<TType> : TType
  >
>;
