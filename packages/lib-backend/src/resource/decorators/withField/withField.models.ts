import type { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';

export type FieldTypeModel = `${FIELD_TYPE}`;

export interface WithFieldParamsModel<TType> {
  Resource?: TType;
  expire?: number;
  isArray?: boolean;
  isOptional?: boolean;
  isUnique?: boolean;
  type?: FieldTypeModel;
}
