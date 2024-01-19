import { type FIELD_DEFINITION_TYPE } from '@lib/shared/openapi/resources/FieldDefinition/FieldDefinition.constants';

export type PropertyFieldModel = {
  property: 'string';
  type: FIELD_DEFINITION_TYPE.PROPERTY;
};
