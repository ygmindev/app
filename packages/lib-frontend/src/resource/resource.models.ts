import { type TableColumnModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import {
  type InferModel,
  type PrimitiveModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type ResourceNameParamsModel } from '@lib/shared/resource/resource.models';
import { type RootNameInputModel } from '@lib/shared/resource/utils/Root/Root.models';

export type ResourceParamsModel<TType, TRoot = undefined> = ResourceNameParamsModel<TRoot> &
  RootNameInputModel<TRoot> & {
    fields?: ResourceFieldsModel<TType>;
    name: string;
  };

export type ResourceFieldsModel<TType> = Array<
  {
    [TKey in StringKeyModel<TType>]: ResourceFieldModel<TType, TKey>;
  }[StringKeyModel<TType>]
>;

export type ResourceFieldModel<TType, TKey extends StringKeyModel<TType>> = TableColumnModel<
  TType,
  TKey
> & {
  fields?: InferModel<NonNullable<TType[TKey]>> extends PrimitiveModel
    ? never
    : ResourceFieldsModel<InferModel<NonNullable<TType[TKey]>>>;
};
