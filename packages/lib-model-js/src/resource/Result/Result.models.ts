import { type PartialArrayModel } from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type ResultModel<TMethod extends RESOURCE_METHOD_TYPE, TType> = TMethod extends
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY
  ? boolean
  : TMethod extends
        | RESOURCE_METHOD_TYPE.CREATE
        | RESOURCE_METHOD_TYPE.GET
        | RESOURCE_METHOD_TYPE.SUBSCRIBE
        | RESOURCE_METHOD_TYPE.UPDATE
    ? Partial<TType>
    : TMethod extends
          | RESOURCE_METHOD_TYPE.GET_MANY
          | RESOURCE_METHOD_TYPE.SEARCH
          | RESOURCE_METHOD_TYPE.CREATE_MANY
      ? PartialArrayModel<TType>
      : TType;
