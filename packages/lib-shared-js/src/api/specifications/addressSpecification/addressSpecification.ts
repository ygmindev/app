import { type AddressSpecificationModel } from '@lib/shared/api/specifications/addressSpecification/addressSpecification.models';
import { FORM_FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';

export const addressSpecification = {
  fields: [
    { id: 'address1', type: FORM_FIELD_TYPE.STRING },
    { id: 'address2', type: FORM_FIELD_TYPE.STRING },
    { id: 'city', type: FORM_FIELD_TYPE.STRING },
    { id: 'country', type: FORM_FIELD_TYPE.STRING },
    { id: 'countryCode', type: FORM_FIELD_TYPE.STRING },
    { id: 'name', type: FORM_FIELD_TYPE.STRING },
    { id: 'postalCode', type: FORM_FIELD_TYPE.STRING },
    { id: 'province', type: FORM_FIELD_TYPE.STRING },
  ],
  name: 'address',
} satisfies AddressSpecificationModel;
