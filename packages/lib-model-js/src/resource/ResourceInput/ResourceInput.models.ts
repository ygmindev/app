import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type FILTER_COMBINATION } from '@lib/model/resource/Filter/Filter.constants';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { type GetManyOptionsModel } from '@lib/model/resource/GetManyOptions/GetManyOptions.models';
import { type InputtableModel } from '@lib/model/resource/Inputtable/Inputtable.models';
import { type RootInputModel } from '@lib/model/resource/Root/Root.models';
import { type SearchOptionsModel } from '@lib/model/resource/SearchOptions/SearchOptions.models';
import {
  type EmptyObjectModel,
  type PartialArrayModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
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

type CreateResourceInputModel<TType> = {
  form?: InputtableModel<TType>;
  options?: CreateOptionsModel;
};

type CreateManyArgsModel<TType> = {
  form?: PartialArrayModel<TType>;
  options?: CreateOptionsModel;
};

export type GetOptionsModel<TType> = {
  combination?: FILTER_COMBINATION;
  populate?: Array<StringKeyModel<TType>>;
};

type GetArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: string;
  options?: GetOptionsModel<TType>;
};

type GetManyArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: GetManyOptionsModel<TType>;
};

type RemoveOptionsModel = CommonOptionsModel & {
  combination?: FILTER_COMBINATION;
  isFlush?: boolean;
};

type RemoveArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: RemoveOptionsModel;
};

type SubscribeOptionsModel = EmptyObjectModel;

type SubscribeArgsModel<TType> = {
  id: string;
  options?: SubscribeOptionsModel;
};

type SearchArgsModel<TType> = {
  fields: Array<StringKeyModel<TType>>;
  options?: SearchOptionsModel<TType>;
  query: string;
};

type UpdateOptionsModel = {
  isFlush?: boolean;
  isUpsert?: boolean;
};

type UpdateManyOptionsModel = {
  combination?: FILTER_COMBINATION;
};

type UpdateArgsModel<TType> = {
  id?: string;
  options?: UpdateOptionsModel;
  update?: InputtableModel<TType>;
};

type UpdateManyArgsModel<TType> = {
  filter?: Array<FilterModel<TType>>;
  id?: Array<string>;
  options?: UpdateManyOptionsModel;
  update?: InputtableModel<TType>;
};

export type ResourceInputParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = {
  method?: TMethod;
  name: string;
  Resource(): ResourceClassModel<TType>;
};

export type ResourceInputModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
> = RootInputModel<TRoot> &
  (TMethod extends RESOURCE_METHOD_TYPE.CREATE
    ? CreateResourceInputModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.CREATE_MANY
      ? CreateManyArgsModel<TType>
      : TMethod extends RESOURCE_METHOD_TYPE.GET
        ? GetArgsModel<TType>
        : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY
          ? GetManyArgsModel<TType>
          : TMethod extends RESOURCE_METHOD_TYPE.REMOVE
            ? RemoveArgsModel<TType>
            : TMethod extends RESOURCE_METHOD_TYPE.SEARCH
              ? SearchArgsModel<TType>
              : TMethod extends RESOURCE_METHOD_TYPE.SUBSCRIBE
                ? SubscribeArgsModel<TType>
                : TMethod extends RESOURCE_METHOD_TYPE.UPDATE
                  ? UpdateArgsModel<TType>
                  : TMethod extends RESOURCE_METHOD_TYPE.UPDATE_MANY
                    ? UpdateManyArgsModel<TType>
                    : never);
