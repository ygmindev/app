import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type GetConnectionParamsModel<TType, TRoot = undefined> = {
  count: number;
  getMany(
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;
  input?: ResourceInputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>;
  pagination?: PaginationModel;
};

export type GetConnectionModel<TType, TRoot = undefined> = RootModel<TRoot> & {
  result: ConnectionModel<TType> | undefined;
};
