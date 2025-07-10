import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type FieldRelation } from '@lib/backend/resource/utils/withField/withField.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type DataTypeModel, type FieldTypeModel } from '@lib/shared/data/data.models';

export type _WithFieldParamsModel<TType> = {
  expire?: number;
  isArray?: boolean;
  isDatabase?: boolean;
  isOptional?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  leaf?: StringKeyModel<TType>;
  name?: string;
  relation?: FieldRelation;
  root?: StringKeyModel<TType>;
  type?: DataTypeModel | FieldTypeModel;
  Resource?(): ResourceClassModel<TType>;
  defaultValue?(): TType;
};

export type _WithFieldModel = PropertyDecorator;
