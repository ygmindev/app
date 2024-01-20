import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type AddressFieldModel } from '@lib/shared/openapi/utils/AddressField/AddressField.models';
import { type CategoryFieldModel } from '@lib/shared/openapi/utils/CategoryField/CategoryField.models';
import { type DateFieldModel } from '@lib/shared/openapi/utils/DateField/DateField.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type NumberFieldModel } from '@lib/shared/openapi/utils/NumberField/NumberField.models';
import { type PropertyFieldModel } from '@lib/shared/openapi/utils/PropertyField/PropertyField.models';
import { type StringFieldModel } from '@lib/shared/openapi/utils/StringField/StringField.models';

export type FieldTypeModel = `${FIELD_TYPE}`;

export type BaseFieldModel = WithIdModel & {
  isArray?: boolean;
  translation?: Record<string, string>;
};

export type FieldModel =
  | AddressFieldModel
  | CategoryFieldModel
  | DateFieldModel
  | NumberFieldModel
  | PropertyFieldModel
  | StringFieldModel;
