import type { SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';

export interface TimezoneFieldPropsModel extends Omit<SelectFieldPropsModel, 'options'> {}
