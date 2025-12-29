import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import {
  type FIELD_RELATION,
  type FIELD_TYPE,
} from '@lib/backend/resource/utils/withField/withField.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type _WithFieldParamsModel<TType extends unknown> = {
  expire?: number;
  isArray?: boolean;
  isDatabase?: boolean;
  isOptional?: boolean;
  isSchema?: boolean;
  isUnique?: boolean;
  relation?: FIELD_RELATION;
  root?: StringKeyModel<TType>;
  type?: FIELD_TYPE;
  Resource?(): ResourceClassModel<TType>;
  defaultValue?(): TType;
};

export type _WithFieldModel = PropertyDecorator;
