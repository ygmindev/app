import { type FIELD_DEFINITION_TYPE } from '@lib/frontend/openapi/resources/FieldDefinition/FieldDefinition.constants';

export type PropertyFieldDefinitionModel = {
  property: 'string';
  type: FIELD_DEFINITION_TYPE.PROPERTY;
};
