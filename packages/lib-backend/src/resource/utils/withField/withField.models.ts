import { type FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type DataTypeModel, type FieldTypeModel } from '#lib-shared/data/data.models';

export type WithFieldParamsModel<TType> = {
  Resource?: TType;
  defaultValue?(): TType;
  expire?: number;
  isArray?: boolean;
  isOptional?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  relation?: FieldRelation;
  root?: StringKeyModel<TType>;
  type: DataTypeModel | FieldTypeModel;
};

export type WithFieldModel = PropertyDecorator;

export type FieldRelation = `${FIELD_RELATION}`;
