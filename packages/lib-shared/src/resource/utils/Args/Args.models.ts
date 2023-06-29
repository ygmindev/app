import { type ObjectId } from 'mongodb';

import { type PrimitiveModel } from '#lib-shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

type _ProjectPropertyModel<TType> = TType extends Array<infer TElement>
  ? _ProjectPropertyModel<TElement> | boolean
  : TType extends PrimitiveModel | ObjectId
  ? boolean
  : TType extends object
  ? ProjectModel<TType>
  : boolean;

export type ProjectModel<TType> = {
  [TKey in keyof TType]?: _ProjectPropertyModel<TType[TKey]>;
};

type _ProjectOptionsModel<TType> = {
  project?: ProjectModel<TType>;
};

type _CreateArgsModel<TType> = {
  form: TType;
};

type _GetArgsOptionsModel<TType> = {
  aggregate?: Array<object>;
} & _ProjectOptionsModel<TType>;

type _GetArgsModel<TType> = {
  filter: FilterModel<TType>;
  options?: _GetArgsOptionsModel<TType>;
};

type _GetManyArgsOptionsModel<TType> = {
  skip?: number;
  take?: number;
} & _GetArgsOptionsModel<TType>;

type _GetManyArgsModel<TType> = {
  filter: FilterModel<TType>;
  options?: _GetManyArgsOptionsModel<TType>;
};

type _GetConnectionArgsModel<TType> = {
  filter: FilterModel<TType>;
  pagination: PaginationModel;
};

type _RemoveArgsModel<TType> = {
  filter: FilterModel<TType>;
};

type _UpdateArgsOptionsModel<TType> = _ProjectOptionsModel<TType>;

type _UpdateArgsModel<TType> = {
  filter: FilterModel<TType>;
  options?: _UpdateArgsOptionsModel<TType>;
  update: UpdateModel<TType>;
};

export type ArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = RootModel<TRoot> &
  (TMethod extends RESOURCE_METHOD_TYPE.CREATE
    ? _CreateArgsModel<TForm>
    : TMethod extends RESOURCE_METHOD_TYPE.GET
    ? _GetArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY
    ? _GetManyArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION
    ? _GetConnectionArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.REMOVE
    ? _RemoveArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.UPDATE
    ? _UpdateArgsModel<TType>
    : never);
