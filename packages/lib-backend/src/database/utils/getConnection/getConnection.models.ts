import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type RootModel } from '@lib/shared/resource/utils/Root/Root.models';

export type GetConnectionParamsModel<TType, TForm, TRoot = undefined> = {
  count: number;
  getMany(
    input?: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TRoot>>;
  input?: InputModel<RESOURCE_METHOD_TYPE.GET_MANY, TType, TForm, TRoot>;
  pagination?: PaginationModel;
};

export type GetConnectionModel<TType, TRoot = undefined> = RootModel<TRoot> & {
  result: ConnectionModel<TType> | undefined;
};
