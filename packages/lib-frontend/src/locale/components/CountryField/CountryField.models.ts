import { type DropdownFieldPropsModel } from '@lib-frontend/data/components/DropdownField/DropdownField.models';
import { type FieldRefModel } from '@lib-frontend/data/data.models';

export type CountryFieldPropsModel = Omit<DropdownFieldPropsModel, 'options'>;

export type CountryFieldRefModel = FieldRefModel;
