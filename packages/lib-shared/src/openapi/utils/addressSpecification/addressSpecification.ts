import { type SpecificationFormModel } from '@lib/shared/openapi/resources/Specification/Specification.models';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

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
} satisfies SpecificationFormModel;
