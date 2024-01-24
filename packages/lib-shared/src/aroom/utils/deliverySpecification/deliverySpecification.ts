import { type DeliverySpecificationModel } from '@lib/shared/aroom/utils/deliverySpecification/deliverySpecification.models';
import { addressProperty } from '@lib/shared/openapi/utils/addressProperty/addressProperty';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export const deliverySpecification = {
  fields: [
    { id: 'pickup', property: addressProperty, type: FIELD_TYPE.PROPERTY },
    { id: 'dropoff', property: addressProperty, type: FIELD_TYPE.PROPERTY },
    { id: 'email', type: FIELD_TYPE.STRING },
  ],
  name: 'deliveryRequest',
} satisfies SpecificationModel<DeliverySpecificationModel>;
