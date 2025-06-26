import { type InferModel, type StringKeyModel } from '@lib/shared/core/core.models';
import { type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type SpecificationModel<TType> = {
  fields: Array<SpecificationFieldModel<TType>>;
  name: string;
};

export type SpecificationFieldModel<TType> = {
  [TKey in StringKeyModel<InferModel<TType>>]: FieldModel<InferModel<TType>, TKey>;
}[StringKeyModel<InferModel<TType>>];
