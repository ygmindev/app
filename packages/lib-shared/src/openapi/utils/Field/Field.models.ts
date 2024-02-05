import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type SpecificationModel } from '@lib/shared/openapi/resources/Specification/Specification.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';

export type FieldTypeModel = `${FIELD_TYPE}`;

export type FieldModel = WithIdModel & {
  isArray?: boolean;
  isOptional?: boolean;
  specification?: SpecificationModel;
  type: FieldTypeModel;
};
