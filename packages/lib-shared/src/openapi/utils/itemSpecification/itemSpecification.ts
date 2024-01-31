import { type ItemSpecificationModel } from '@lib/shared/openapi/utils/itemSpecification/itemSpecification.models';
import { WIDGET_TYPE } from '@lib/shared/openapi/utils/Specification/Specification.constants';

export const itemSpecification = {
  fields: [],
  name: 'item',
  translation: {},
  widget: WIDGET_TYPE.ADDRESS,
} satisfies ItemSpecificationModel;
