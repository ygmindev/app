import { type DeliverySpecificationModel } from '@lib/shared/api/specifications/deliverySpecification/deliverySpecification.models';
import { FORM_FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';

export const deliverySpecification = {
  fields: [
    { id: 'from', type: FORM_FIELD_TYPE.ADDRESS },
    { id: 'to', type: FORM_FIELD_TYPE.ADDRESS },
  ],
  name: 'delivery',
} satisfies DeliverySpecificationModel;
