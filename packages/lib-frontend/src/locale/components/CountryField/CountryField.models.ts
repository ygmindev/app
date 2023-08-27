import { type SelectFieldPropsModel } from '#lib-frontend/data/components/SelectField/SelectField.models';

export type CountryFieldPropsModel = Omit<SelectFieldPropsModel, 'options'>;
