import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type BaseFieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type PhoneFieldModel<TType, TKey extends StringKeyModel<TType>> = BaseFieldModel<
  TType,
  TKey
> & {
  type: FIELD_TYPE.PHONE;
};
