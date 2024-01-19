import { type DropdownInputPropsModel } from '@lib/frontend/data/components/DropdownInput/DropdownInput.models';

export type TimezoneInputPropsModel = Omit<DropdownInputPropsModel, 'options'>;
