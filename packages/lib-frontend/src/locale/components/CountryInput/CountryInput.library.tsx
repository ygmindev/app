import { CountryInput } from '@lib/frontend/locale/components/CountryInput/CountryInput';
import { type CountryInputPropsModel } from '@lib/frontend/locale/components/CountryInput/CountryInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<CountryInputPropsModel> = {
  Component: CountryInput,
  defaultProps: {},
  variants: [],
};
