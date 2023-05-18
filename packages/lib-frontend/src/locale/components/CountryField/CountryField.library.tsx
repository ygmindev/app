import { CountryField } from '@lib/frontend/locale/components/CountryField/CountryField';
import type { CountryFieldPropsModel } from '@lib/frontend/locale/components/CountryField/CountryField.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CountryFieldPropsModel> = {
  Component: CountryField,
  defaultProps: {},
  variants: [],
};
