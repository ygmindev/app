import type { SelectFieldPropsModel } from '@lib/frontend/form/components/SelectField/SelectField.models';

export interface CountryFieldPropsModel extends Omit<SelectFieldPropsModel, 'options'> {}
