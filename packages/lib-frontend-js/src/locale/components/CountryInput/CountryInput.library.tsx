import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { CountryInput } from '@lib/frontend/locale/components/CountryInput/CountryInput';
import { type CountryInputPropsModel } from '@lib/frontend/locale/components/CountryInput/CountryInput.models';

export const props: LibraryPropsModel<CountryInputPropsModel> = {
  Component: CountryInput,
  defaultProps: {},
  variants: [],
};
