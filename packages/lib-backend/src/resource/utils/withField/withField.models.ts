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
  type: DataTypeModel | FieldTypeModel;
};

export type WithFieldModel = PropertyDecorator;
