import { type NumberUnitModel } from '#lib-frontend/data/data.models';
import {
  type FIELD_TYPE,
  type FIELD_TYPE_MORE,
  type FORM_MODE,
} from '#lib-shared/data/data.constants';

export type FormModeModel = `${FORM_MODE}`;

export type FieldTypeModel = `${FIELD_TYPE}`;

export type FieldTypeMoreModel = `${FIELD_TYPE_MORE}`;

export type RangeModel<TType> = {
  max?: TType;
  value?: TType;
};

export type ScaledNumberModel = { unit?: NumberUnitModel; value: number };
