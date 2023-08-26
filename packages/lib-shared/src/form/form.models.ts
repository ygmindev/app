import { type FIELD_TYPE, type FORM_MODE } from '#lib-shared/form/form.constants';

export type FormModeModel = `${FORM_MODE}`;

export type FieldTypeModel = `${FIELD_TYPE}`;

export type RelativeDateModel = { unit: string; value: number };
