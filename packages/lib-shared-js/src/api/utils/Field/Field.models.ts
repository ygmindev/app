import { type FORM_FIELD_TYPE } from '@lib/shared/api/utils/Field/Field.constants';
import { type SpecificationModel } from '@lib/shared/api/utils/Specification/Specification.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export type FieldModel<TType, TKey extends StringKeyModel<TType>> = WithIdModel<TKey> & {
  isArray?: boolean;
  isOptional?: boolean;
  specification?: SpecificationModel<unknown>;
  type: FORM_FIELD_TYPE;
};
