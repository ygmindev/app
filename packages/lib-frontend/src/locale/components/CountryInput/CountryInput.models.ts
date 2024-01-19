import { type DropdownInputPropsModel } from '@lib/frontend/data/components/DropdownInput/DropdownInput.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';

export type CountryInputPropsModel = Omit<DropdownInputPropsModel, 'options'>;

export type CountryInputRefModel = InputRefModel;
