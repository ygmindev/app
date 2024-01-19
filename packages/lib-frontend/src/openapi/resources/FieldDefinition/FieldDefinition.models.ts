import { type CategoryFieldDefinitionModel } from '@lib/frontend/openapi/resources/CategoryProperty/CategoryProperty.models';
import { type DateFieldDefinitionModel } from '@lib/frontend/openapi/resources/DateProperty/DateProperty.models';
import { type FIELD_DEFINITION_TYPE } from '@lib/frontend/openapi/resources/FieldDefinition/FieldDefinition.constants';
import { type PropertyFieldDefinitionModel } from '@lib/frontend/openapi/resources/FieldProprety/FieldProperty.models';
import { type NumberFieldDefinitionModel } from '@lib/frontend/openapi/resources/NumberProperty/NumberProperty.models';
import { type StringFieldDefinitionModel } from '@lib/frontend/openapi/resources/StringProperty/StringProperty.models';

export type FieldDefinitionTypeModel = `${FIELD_DEFINITION_TYPE}`;

export type BaseFieldDefinitionModel = {
  isArray?: boolean;
  name: string;
  translation?: Record<string, string>;
  type: FieldDefinitionTypeModel;
};

export type FieldDefinitionModel = BaseFieldDefinitionModel &
  (
    | CategoryFieldDefinitionModel
    | DateFieldDefinitionModel
    | NumberFieldDefinitionModel
    | PropertyFieldDefinitionModel
    | StringFieldDefinitionModel
  );
