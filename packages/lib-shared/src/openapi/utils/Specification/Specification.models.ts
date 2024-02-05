import {
  type InferModel,
  type RequiredModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';

export type SpecificationModel<TType> = {
  fields: Array<FieldModel<TType>>;
  name: string;
};

export type FieldModel<TType> = {
  [TKey in StringKeyModel<RequiredModel<InferModel<TType>>>]: FieldModel<
    RequiredModel<InferModel<TType>>[TKey]
  >;
}[StringKeyModel<RequiredModel<InferModel<TType>>>];
