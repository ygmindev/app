import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type BaseFieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type NumberFieldModel = BaseFieldModel & {
  type: FIELD_TYPE.NUMBER;
};
