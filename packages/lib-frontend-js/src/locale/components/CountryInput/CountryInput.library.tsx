import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { CountryInput } from '@lib/frontend/locale/components/CountryInput/CountryInput';
import { type CountryInputPropsModel } from '@lib/frontend/locale/components/CountryInput/CountryInput.models';

export const props: LibraryPropsModel<CountryInputPropsModel> = {
  Component: CountryInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
