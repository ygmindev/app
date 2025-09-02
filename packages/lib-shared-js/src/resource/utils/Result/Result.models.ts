import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export type ResultModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
> = TMethod extends RESOURCE_METHOD_TYPE.REMOVE
  ? boolean
  : TMethod extends
        | RESOURCE_METHOD_TYPE.CREATE
        | RESOURCE_METHOD_TYPE.GET
        | RESOURCE_METHOD_TYPE.UPDATE
        | RESOURCE_METHOD_TYPE.SUBSCRIBE
    ? Partial<TType>
    : TMethod extends
          | RESOURCE_METHOD_TYPE.GET_MANY
          | RESOURCE_METHOD_TYPE.CREATE_MANY
          | RESOURCE_METHOD_TYPE.SEARCH
      ? Array<Partial<TType>>
      : TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION
        ? ConnectionModel<TType>
        : TType;
