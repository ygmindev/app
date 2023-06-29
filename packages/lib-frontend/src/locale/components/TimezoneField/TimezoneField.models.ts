import { type SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';

export type TimezoneFieldPropsModel = Omit<SelectFieldPropsModel, 'options'>;
