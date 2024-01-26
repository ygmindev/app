import { type AddressSpecificationModel } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification.models';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

export const addressSpecification = {
  fields: [
    { id: 'id', type: FIELD_TYPE.STRING },
    { id: 'latitude', type: FIELD_TYPE.NUMBER },
    { id: 'longitude', type: FIELD_TYPE.NUMBER },
  ],
  name: 'address',
  translation: {},
} satisfies AddressSpecificationModel;
