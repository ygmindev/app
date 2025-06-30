import {
  type EmptyObjectModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import {
  type EntityResourceDataModel,
  type ResourceMethodTypeModel,
} from '@lib/shared/resource/resource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import { type RootInputModel } from '@lib/shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import { type ObjectId } from 'mongodb';

type ProjectPropertyModel<TType> =
  TType extends Array<infer TElement>
    ? ProjectPropertyModel<TElement> | boolean
    : TType extends PrimitiveModel | ObjectId
      ? boolean
      : TType extends object
        ? ProjectModel<TType>
        : boolean;

export type ProjectModel<TType> = {
  [TKey in keyof TType]?: ProjectPropertyModel<TType[TKey]>;
};

type CommonOptionsModel = object;

type CreateOptionsModel = CommonOptionsModel & {
  isFlush?: boolean;
};

type CreateResourceArgsModel<TType> = {
  form?: EntityResourceDataModel<TType>;
  options?: CreateOptionsModel;
};

type CreateManyArgsModel<TType> = {
  form?: Array<EntityResourceDataModel<TType>>;
  options?: CreateOptionsModel;
};

type GetOptionsModel<TType> = {
  populate?: Array<StringKeyModel<TType>>;
};

type GetArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: GetOptionsModel<TType>;
};

type GetManyOptionsModel<TType> = GetOptionsModel<TType> & {
  skip?: number;
  take?: number;
};

type GetManyArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<never>;
  options?: GetManyOptionsModel<TType>;
};

type GetConnectionOptionsModel = CommonOptionsModel;

type GetConnectionArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<never>;
  options?: GetConnectionOptionsModel;
  pagination?: PaginationModel;
};

type RemoveOptionsModel = CommonOptionsModel & {
  isFlush?: boolean;
};

type RemoveArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: RemoveOptionsModel;
};

type SearchOptionsModel = CommonOptionsModel;

type SearchArgsModel<TType> = {
  keys?: Array<StringKeyModel<TType>>;
  options?: SearchOptionsModel;
  query?: string;
};

type SubscribeOptionsModel = EmptyObjectModel;

type SubscribeArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  options?: SubscribeOptionsModel;
};

type UpdateOptionsModel = {
  isFlush?: boolean;
};

type UpdateArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: UpdateOptionsModel;
  update?: UpdateModel<TType>;
};

export type ResourceArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  (TMethod extends RESOURCE_METHOD_TYPE.CREATE
    ? CreateResourceArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.CREATE_MANY
      ? CreateManyArgsModel<TType>
      : TMethod extends RESOURCE_METHOD_TYPE.GET
        ? GetArgsModel<TType>
        : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY
          ? GetManyArgsModel<TType>
          : TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION
            ? GetConnectionArgsModel<TType>
            : TMethod extends RESOURCE_METHOD_TYPE.REMOVE
              ? RemoveArgsModel<TType>
              : TMethod extends RESOURCE_METHOD_TYPE.SEARCH
                ? SearchArgsModel<TType>
                : TMethod extends RESOURCE_METHOD_TYPE.SUBSCRIBE
                  ? SubscribeArgsModel<TType>
                  : TMethod extends RESOURCE_METHOD_TYPE.UPDATE
                    ? UpdateArgsModel<TType>
                    : never);
