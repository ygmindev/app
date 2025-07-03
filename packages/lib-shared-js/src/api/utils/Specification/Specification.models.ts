import { type FieldModel } from '@lib/shared/api/utils/Field/Field.models';
import { type InferModel, type StringKeyModel } from '@lib/shared/core/core.models';

export type SpecificationModel<TType> = {
  fields: Array<SpecificationFieldModel<TType>>;
  name: string;
};

export type SpecificationFieldModel<TType> = {
  [TKey in StringKeyModel<InferModel<TType>>]: FieldModel<InferModel<TType>, TKey>;
}[StringKeyModel<InferModel<TType>>];
