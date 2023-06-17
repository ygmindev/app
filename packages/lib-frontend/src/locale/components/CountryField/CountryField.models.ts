import type { SelectFieldPropsModel } from '#lib-frontend/form/components/SelectField/SelectField.models';

export type CountryFieldPropsModel = Omit<SelectFieldPropsModel, 'options'>;
