import { type AddressSpecificationModel } from '@lib/shared/openapi/utils/addressSpecification/addressSpecification.models';
import { FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { WIDGET_TYPE } from '@lib/shared/openapi/utils/Specification/Specification.constants';

export const carSpecification = {
  fields: [{ id: 'address1', type: FIELD_TYPE.STRING }],
  name: 'car',
  translation: {},
  widget: WIDGET_TYPE.ADDRESS,
} satisfies AddressSpecificationModel;
