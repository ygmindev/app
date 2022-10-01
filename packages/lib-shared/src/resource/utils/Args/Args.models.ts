import type { PrimitiveModel } from '@lib/shared/core/core.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';
import type { FormModel } from '@lib/shared/resource/utils/Form/Form.models';
import type { PaginationModel } from '@lib/shared/resource/utils/Pagination/Pagination.models';
import type { UpdateModel } from '@lib/shared/resource/utils/Update/Update.models';
import type { ObjectId } from 'mongodb';

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

interface _ProjectOptionsModel<TType> {
  project?: ProjectModel<TType>;
}

interface _CreateArgsModel<TType> {
  form: FormModel<TType>;
}

interface _GetArgsOptionsModel<TType> extends _ProjectOptionsModel<TType> {
  aggregate?: Array<object>;
}

interface _GetArgsModel<TType> {
  filter: FilterModel<TType>;
  options?: _GetArgsOptionsModel<TType>;
}

interface _GetManyArgsOptionsModel<TType> extends _GetArgsOptionsModel<TType> {
  skip?: number;
  take?: number;
}

interface _GetManyArgsModel<TType> {
  filter: FilterModel<TType>;
  options?: _GetManyArgsOptionsModel<TType>;
}

interface _GetConnectionArgsModel<TType> {
  filter: FilterModel<TType>;
  pagination: PaginationModel;
}

interface _RemoveArgsModel<TType> {
  filter: FilterModel<TType>;
}

interface _UpdateArgsOptionsModel<TType> extends _ProjectOptionsModel<TType> {}

interface _UpdateArgsModel<TType> {
  filter: FilterModel<TType>;
  options?: _UpdateArgsOptionsModel<TType>;
  update: UpdateModel<TType>;
}

export type ArgsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
> = TMethod extends typeof RESOURCE_METHOD_TYPE.CREATE
  ? _CreateArgsModel<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.GET
  ? _GetArgsModel<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.GET_MANY
  ? _GetManyArgsModel<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.GET_CONNECTION
  ? _GetConnectionArgsModel<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.REMOVE
  ? _RemoveArgsModel<TType>
  : TMethod extends typeof RESOURCE_METHOD_TYPE.UPDATE
  ? _UpdateArgsModel<TType>
  : never;
