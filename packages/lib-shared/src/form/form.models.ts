import {
  type FIELD_TYPE,
  type FIELD_TYPE_MORE,
  type FORM_MODE,
} from '#lib-shared/form/form.constants';

export type FormModeModel = `${FORM_MODE}`;

export type FieldTypeModel = `${FIELD_TYPE}`;

export type FieldTypeMoreModel = `${FIELD_TYPE_MORE}`;

export type RangeModel<TType> = {
  max?: TType;
  value?: TType;
};

export type ScaledNumberModel = { unit?: string; value: number };
