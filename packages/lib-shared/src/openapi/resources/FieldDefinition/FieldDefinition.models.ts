import { type CategoryFieldModel } from '@lib/shared/openapi/resources/CategoryField/CategoryField.models';
import { type DateFieldModel } from '@lib/shared/openapi/resources/DateField/DateField.models';
import { type FIELD_DEFINITION_TYPE } from '@lib/shared/openapi/resources/FieldDefinition/FieldDefinition.constants';
import { type PropertyFieldModel } from '@lib/shared/openapi/resources/PropertyField/PropertyField.models';
import { type NumberFieldModel } from '@lib/shared/openapi/resources/NumberField/NumberField.models';
import { type StringFieldModel } from '@lib/shared/openapi/resources/StringField/StringField.models';

export type FieldDefinitionTypeModel = `${FIELD_DEFINITION_TYPE}`;

export type BaseFieldDefinitionModel = {
  isArray?: boolean;
  name: string;
  translation?: Record<string, string>;
  type: FieldDefinitionTypeModel;
};

export type FieldDefinitionModel = BaseFieldDefinitionModel &
  (
    | CategoryFieldModel
    | DateFieldModel
    | NumberFieldModel
    | PropertyFieldModel
    | StringFieldModel
  );
