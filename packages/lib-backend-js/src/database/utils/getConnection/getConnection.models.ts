import { type RequestContextModel } from '@lib/config/api/api.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type GetConnectionParamsModel<TType, TRoot = undefined> = {
  count: number;
  input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>;
  pagination?: PaginationModel;
  getMany(
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;
};

export type GetConnectionModel<TType, TRoot = undefined> = RootModel<TRoot> & {
  result: ConnectionModel<TType> | undefined;
};
