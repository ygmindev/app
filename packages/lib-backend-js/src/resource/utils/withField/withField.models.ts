import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type FIELD_RELATION } from '@lib/backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type DataTypeModel, type FieldTypeModel } from '@lib/shared/data/data.models';

export type WithFieldParamsModel<TType extends unknown> = {
  Resource?(): ResourceClassModel<TType>;
  defaultValue?(): TType;
  expire?: number;
  isArray?: boolean;
  isOptional?: boolean;
  isDatabase?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  name?: string;
  relation?: FieldRelation;
  root?: StringKeyModel<TType>;
  type: DataTypeModel | FieldTypeModel;
};

export type WithFieldModel = PropertyDecorator;

export type FieldRelation = `${FIELD_RELATION}`;
