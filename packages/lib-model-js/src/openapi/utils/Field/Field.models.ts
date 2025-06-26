import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type SpecificationModel } from '@lib/shared/openapi/utils/Specification/Specification.models';

export type FieldTypeModel = `${FIELD_TYPE}`;

export type FieldModel<TType, TKey extends StringKeyModel<TType>> = WithIdModel<TKey> & {
  isArray?: boolean;
  isOptional?: boolean;
  specification?: SpecificationModel<unknown>;
  type: FieldTypeModel;
};
