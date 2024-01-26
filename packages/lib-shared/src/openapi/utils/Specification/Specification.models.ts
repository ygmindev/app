import {
  type InferModel,
  type RequiredModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type SpecificationModel<TType> = {
  fields: Array<
    {
      [TKey in StringKeyModel<RequiredModel<InferModel<TType>>>]: FieldModel<
        RequiredModel<InferModel<TType>>,
        TKey
      >;
    }[StringKeyModel<RequiredModel<InferModel<TType>>>]
  >;
  name: string;
  translation?: Record<string, string>;
};
