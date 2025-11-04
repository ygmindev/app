import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import {
  type PartialModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';

export type PrimaryKeyModel = string;

export type ResourceReadMethodTypeModel =
  | RESOURCE_METHOD_TYPE.GET
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.GET_CONNECTION
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
  | RESOURCE_METHOD_TYPE.UPDATE
  | RESOURCE_METHOD_TYPE.UPDATE_MANY;

export type FilterableResourceMethodTypeModel =
  | RESOURCE_METHOD_TYPE.GET_MANY
  | RESOURCE_METHOD_TYPE.GET_CONNECTION
  | RESOURCE_METHOD_TYPE.REMOVE;

export type ResourceNameParamsModel<TRoot = undefined> = {
  name: TRoot extends undefined ? string : StringKeyModel<TRoot>;
};

export type EntityResourceDataModel<TType> = TType extends PrimitiveModel
  ? TType
  : {
      [TKey in keyof Omit<
        TType,
        keyof Required<Omit<EntityResourceModel, 'isFixture'>>
      >]?: Required<TType>[TKey] extends EntityResourceModel
        ? Pick<EntityResourceModel, '_id'>
        : Required<TType>[TKey] extends Array<infer TElement>
          ? Array<PartialModel<TElement>>
          : Required<TType>[TKey] extends CollectionModel<infer TElement>
            ? Array<PartialModel<TElement>>
            : Required<TType>[TKey] extends RefModel<EntityResourceModel>
              ? string
              : Required<TType>[TKey];
    };

export type EntityResourcePartialModel<TType> = TType extends PrimitiveModel
  ? TType
  : TType extends Array<infer TElement>
    ? Array<EntityResourcePartialModel<TElement>>
    : TType extends EntityResourceModel
      ? Pick<TType, '_id'> & {
          [TKey in StringKeyModel<Omit<Required<TType>, '_id'>>]?: EntityResourcePartialModel<
            Required<TType>[TKey]
          >;
        }
      : PartialModel<TType>;

export enum RESOURCE_METHOD_TYPE {
  CREATE = 'Create',
  CREATE_MANY = 'CreateMany',
  GET = 'Get',
  GET_CONNECTION = 'GetConnection',
  GET_MANY = 'GetMany',
  REMOVE = 'Remove',
  SUBSCRIBE = 'Subscribe',
  UPDATE = 'Update',
  UPDATE_MANY = 'UpdateMany',
}
