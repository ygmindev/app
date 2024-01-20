import { type FIELD_TYPE } from '@lib/shared/openapi/utils/Field/Field.constants';
import { type BaseFieldModel, type FieldModel } from '@lib/shared/openapi/utils/Field/Field.models';

export type PropertyFieldModel = BaseFieldModel & {
  fields: Array<FieldModel>;
  type: FIELD_TYPE.PROPERTY;
};
