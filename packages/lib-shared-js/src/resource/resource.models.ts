import { type StringKeyModel } from '@lib/shared/core/core.models';

export type ResourceReadMethodTypeModel =
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.SEARCH
  | RESOURCE_METHOD_TYPE.SUBSCRIBE;

export type ResourceWriteMethodTypeModel =
  | RESOURCE_METHOD_TYPE.CREATE
  | RESOURCE_METHOD_TYPE.CREATE_MANY
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY;

export type ResourceMethodTypeCrudModel =
  | RESOURCE_METHOD_TYPE.CREATE
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.SEARCH
  | RESOURCE_METHOD_TYPE.UPDATE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY;

export type FilterableResourceMethodTypeModel =
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.REMOVE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY;

export type ResourceNameParamsModel<TRoot = undefined> = {
  name: TRoot extends undefined ? string : StringKeyModel<TRoot>;
};

export enum RESOURCE_METHOD_TYPE {
  CREATE = 'Create',
  CREATE_MANY = 'CreateMany',
  GET = 'Get',
  GET_MANY = 'GetMany',
  REMOVE = 'Remove',
  SEARCH = 'Search',
  SUBSCRIBE = 'Subscribe',
  UPDATE = 'Update',
  UPDATE_MANY = 'UpdateMany',
}
