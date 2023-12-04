import { type TableColumnModel } from '#lib-frontend/data/hooks/useTable/useTable.models';
import {
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '#lib-shared/core/core.models';
import { type ResourceNameParamsModel } from '#lib-shared/resource/resource.models';

export type ResourceParamsModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> & {
  fields?: ResourceFieldsModel<TType>;
  name: string;
  root?: string;
};

export type ResourceFieldsModel<TType> = Array<
  {
    [TKey in StringKeyModel<NonNullable<TType>>]: ResourceFieldModel<NonNullable<TType>, TKey>;
  }[StringKeyModel<NonNullable<TType>>]
>;

export type ResourceFieldModel<TType, TKey extends StringKeyModel<TType>> = TableColumnModel<
  TType,
  TKey
> & {
  fields?: InferModel<NonNullable<TType[TKey]>> extends PrimitiveModel
    ? never
    : ResourceFieldsModel<InferModel<NonNullable<TType[TKey]>>>;
};
