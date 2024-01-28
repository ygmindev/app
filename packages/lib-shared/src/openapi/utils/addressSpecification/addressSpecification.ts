import { type AddressSpecificationModel } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification.models';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { WIDGET_TYPE } from '@lib/shared/openapi/utils/Specification/Specification.constants';

export const addressSpecification = {
  fields: [
    { id: 'address1', type: FIELD_TYPE.STRING },
    { id: 'address2', type: FIELD_TYPE.STRING },
    { id: 'city', type: FIELD_TYPE.STRING },
    { id: 'country', type: FIELD_TYPE.STRING },
    { id: 'countryCode', type: FIELD_TYPE.STRING },
    { id: 'name', type: FIELD_TYPE.STRING },
    { id: 'postalCode', type: FIELD_TYPE.STRING },
    { id: 'province', type: FIELD_TYPE.STRING },
  ],
  name: 'address',
  translation: {},
  widget: WIDGET_TYPE.ADDRESS,
} satisfies AddressSpecificationModel;
