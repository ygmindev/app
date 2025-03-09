import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type FieldRelation } from '@lib/backend/resource/utils/withField/withField.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type DataTypeModel, type FieldTypeModel } from '@lib/shared/data/data.models';

export type _WithFieldParamsModel<TType extends unknown> = {
  Resource?(): ResourceClassModel<TType>;
  defaultValue?(): TType;
  expire?: number;
  inversedBy?: StringKeyModel<TType>;
  isArray?: boolean;
  isDatabase?: boolean;
  isOptional?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  mappedBy?: StringKeyModel<TType>;
  name?: string;
  relation?: FieldRelation;
  type: DataTypeModel | FieldTypeModel;
};

export type _WithFieldModel = PropertyDecorator;
