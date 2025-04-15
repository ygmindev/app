import {
  type DATA_TYPE,
  type DATA_TYPE_MORE,
  type FORM_MODE,
  type PROPERTY_TYPE,
} from '@lib/shared/data/data.constants';

export type FormModeModel = `${FORM_MODE}`;

export type DataTypeModel = `${DATA_TYPE}`;

export type DataTypeMoreModel = `${DATA_TYPE_MORE}`;

export type PropertyTypeModel = `${PROPERTY_TYPE}`;

export type FieldTypeModel = `${PROPERTY_TYPE}` | DataTypeModel;

export type FormattableTypeModel = FieldTypeModel | DataTypeMoreModel;

export type RangeModel<TType> = {
  max?: TType;
  min?: TType;
};

export type FileModel = {
  name: string;
  size?: number;
  type: string;
  url: string;
};
