import { type ObjectId } from 'mongodb';

import { type PrimitiveModel } from '#lib-shared/core/core.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';
import { type PaginationModel } from '#lib-shared/resource/utils/Pagination/Pagination.models';
import { type RootModel } from '#lib-shared/resource/utils/Root/Root.models';
import { type UpdateModel } from '#lib-shared/resource/utils/Update/Update.models';

type ProjectPropertyModel<TType> = TType extends Array<infer TElement>
  ? ProjectPropertyModel<TElement> | boolean
  : TType extends PrimitiveModel | ObjectId
  ? boolean
  : TType extends object
  ? ProjectModel<TType>
  : boolean;

export type ProjectModel<TType> = {
  [TKey in keyof TType]?: ProjectPropertyModel<TType[TKey]>;
};

type ProjectOptionsModel<TType> = {
  project?: ProjectModel<TType>;
};

type CreateArgsModel<TType> = {
  form: TType;
};

type GetArgsOptionsModel<TType> = ProjectOptionsModel<TType> & {
  aggregate?: Array<object>;
};

type GetArgsModel<TType> = {
  filter: Array<FilterModel<TType>>;
  options?: GetArgsOptionsModel<TType>;
};

type GetManyArgsOptionsModel<TType> = GetArgsOptionsModel<TType> & {
  skip?: number;
  take?: number;
};

type GetManyArgsModel<TType> = {
  filter: Array<FilterModel<TType>>;
  options?: GetManyArgsOptionsModel<TType>;
};

type GetConnectionArgsModel<TType> = {
  filter: Array<FilterModel<TType>>;
  pagination: PaginationModel;
};

type RemoveArgsModel<TType> = {
  filter: Array<FilterModel<TType>>;
};

type UpdateArgsOptionsModel<TType> = ProjectOptionsModel<TType>;

type UpdateArgsModel<TType> = {
  filter: Array<FilterModel<TType>>;
  options?: UpdateArgsOptionsModel<TType>;
  update: UpdateModel<TType>;
};

export type ArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = RootModel<TRoot> &
  (TMethod extends RESOURCE_METHOD_TYPE.CREATE
    ? CreateArgsModel<TForm>
    : TMethod extends RESOURCE_METHOD_TYPE.GET
    ? GetArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.GET_MANY
    ? GetManyArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.GET_CONNECTION
    ? GetConnectionArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.REMOVE
    ? RemoveArgsModel<TType>
    : TMethod extends RESOURCE_METHOD_TYPE.UPDATE
    ? UpdateArgsModel<TType>
    : never);
