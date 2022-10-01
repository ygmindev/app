import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ConnectionModel } from '@lib/shared/resource/utils/Connection/Connection.models';

export type ResultModel<TMethod extends ResourceMethodTypeModel, TType> = TMethod extends
  | typeof RESOURCE_METHOD_TYPE.CREATE
  | typeof RESOURCE_METHOD_TYPE.GET
  | typeof RESOURCE_METHOD_TYPE.UPDATE
  | typeof RESOURCE_METHOD_TYPE.REMOVE
  ? TType
  : TMethod extends typeof RESOURCE_METHOD_TYPE.GET_MANY
  ? Array<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.GET_CONNECTION
  ? ConnectionModel<TType>
  : never;
