import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type CategoryFieldModel } from '@lib/shared/openapi/utils/CategoryField/CategoryField.models';
import { type DateFieldModel } from '@lib/shared/openapi/utils/DateField/DateField.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type NumberFieldModel } from '@lib/shared/openapi/utils/NumberField/NumberField.models';
import { type PhoneFieldModel } from '@lib/shared/openapi/utils/PhoneField/PhoneField.models';
import { type PropertyFieldModel } from '@lib/shared/openapi/utils/PropertyField/PropertyField.models';
import { type StringFieldModel } from '@lib/shared/openapi/utils/StringField/StringField.models';

export type FieldTypeModel = `${FIELD_TYPE}`;

export type BaseFieldModel<TType, TKey extends StringKeyModel<TType>> = WithIdModel<TKey> & {
  isArray?: boolean;
  isOptional?: boolean;
  translation?: Record<string, string>;
};

export type FieldModel<TType, TKey extends StringKeyModel<TType>> =
  | CategoryFieldModel<TType, TKey>
  | DateFieldModel<TType, TKey>
  | NumberFieldModel<TType, TKey>
  | PhoneFieldModel<TType, TKey>
  | PropertyFieldModel<TType, TKey>
  | StringFieldModel<TType, TKey>;
