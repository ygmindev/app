import { type DeliverySpecificationModel } from '@lib/shared/openapi/specifications/deliverySpecification/deliverySpecification.models';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

export const deliverySpecification = {
  fields: [
    { id: 'from', type: FIELD_TYPE.ADDRESS },
    { id: 'to', type: FIELD_TYPE.ADDRESS },
  ],
  name: 'delivery',
} satisfies DeliverySpecificationModel;
