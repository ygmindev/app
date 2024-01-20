import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export const deliveryRequestSpecification = {
  fields: [
    { id: 'pickup', isArray: true, type: FIELD_TYPE.ADDRESS },
    { id: 'dropoff', isArray: true, type: FIELD_TYPE.ADDRESS },
  ],
  name: 'deliveryRequest',
} satisfies SpecificationModel;
