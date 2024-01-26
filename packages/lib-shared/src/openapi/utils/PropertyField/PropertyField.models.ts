import {
  type InferModel,
  type RequiredModel,
  type StringKeyModel,
} from '@lib/shared/core/core.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type BaseFieldModel } from '@lib/shared/openapi/utils/Field/Field.models';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type PropertyFieldModel<TType, TKey extends StringKeyModel<TType>> = BaseFieldModel<
  TType,
  TKey
> & {
  specification: SpecificationModel<RequiredModel<InferModel<TType[TKey]>>>;
  type: FIELD_TYPE.PROPERTY;
};
