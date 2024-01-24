import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type BaseFieldModel, type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type PropertyFieldModel<TType, TKey extends StringKeyModel<TType>> = BaseFieldModel<
  TType,
  TKey
> & {
  property: PropertyModel<TType[TKey]>;
  type: FIELD_TYPE.PROPERTY;
};

export type PropertyModel<TType> = {
  fields: Array<
    { [TKey in StringKeyModel<TType>]: FieldModel<TType, TKey> }[StringKeyModel<TType>]
  >;
  name: string;
  translation?: Record<string, string>;
};
