import { type PartialModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export type ResultModel<TMethod extends ResourceMethodTypeModel, TType> = TMethod extends
  | RESOURCE_METHOD_TYPE.CREATE
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.UPDATE
  | RESOURCE_METHOD_TYPE.REMOVE
  ? PartialModel<TType>
  : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY | RESOURCE_METHOD_TYPE.CREATE_MANY
    ? Array<PartialModel<TType>>
    : TMethod extends RESOURCE_METHOD_TYPE.SEARCH
      ? Array<PartialModel<TType>>
      : TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION
        ? ConnectionModel<TType>
        : never;
