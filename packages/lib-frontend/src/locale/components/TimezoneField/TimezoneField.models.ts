import { type DropdownFieldPropsModel } from '#lib-frontend/data/components/DropdownField/DropdownField.models';

export type TimezoneFieldPropsModel = Omit<DropdownFieldPropsModel, 'options'>;
