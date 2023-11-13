import { type DropdownFieldPropsModel } from '#lib-frontend/data/components/DropdownField/DropdownField.models';

export type CountryFieldPropsModel = Omit<DropdownFieldPropsModel, 'options'>;
