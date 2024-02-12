import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

export const deliverySpecification = {
  fields: [
    { id: 'date', isOptional: true, type: FIELD_TYPE.DATE },
    { id: 'origin', type: FIELD_TYPE.ADDRESS },
    { id: 'destination', type: FIELD_TYPE.ADDRESS },
  ],
  name: 'deliveryRequest',
} satisfies SpecificationFormModel;
