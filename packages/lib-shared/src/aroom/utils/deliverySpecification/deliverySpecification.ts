import { type DeliverySpecificationModel } from '@lib/shared/aroom/utils/deliverySpecification/deliverySpecification.models';
import { addressSpecification } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export const deliverySpecification = {
  fields: [
    { id: 'origin', specification: addressSpecification, type: FIELD_TYPE.PROPERTY },
    { id: 'stops', isArray: true, specification: addressSpecification, type: FIELD_TYPE.PROPERTY },
    { id: 'destination', specification: addressSpecification, type: FIELD_TYPE.PROPERTY },
    { id: 'email', type: FIELD_TYPE.STRING },
  ],
  name: 'deliveryRequest',
} satisfies SpecificationModel<DeliverySpecificationModel>;
