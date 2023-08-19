import { type FieldTypeModel } from '#lib-shared/form/form.models';

export type WithFieldParamsModel<TType> = {
  Resource?: TType;
  defaultValue?(): TType;
  expire?: number;
  isArray?: boolean;
  isOptional?: boolean;
  isRepository?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  type: FieldTypeModel;
};

export type WithFieldModel = PropertyDecorator;
