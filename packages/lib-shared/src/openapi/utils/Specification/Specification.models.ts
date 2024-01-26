import {
  type InferModel,
  type RequiredModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';
import { type WIDGET_TYPE } from '@lib/shared/openapi/utils/Specification/Specification.constants';

export type SpecificationModel<TType> = {
  fields: Array<SpecificationFieldModel<TType>>;
  name: string;
  translation?: Record<string, string>;
  widget?: PropertyWidgetModel;
};

export type SpecificationFieldModel<TType> = {
  [TKey in StringKeyModel<RequiredModel<InferModel<TType>>>]: FieldModel<
    RequiredModel<InferModel<TType>>,
    TKey
  >;
}[StringKeyModel<RequiredModel<InferModel<TType>>>];

export type PropertyWidgetModel = `${WIDGET_TYPE}`;
