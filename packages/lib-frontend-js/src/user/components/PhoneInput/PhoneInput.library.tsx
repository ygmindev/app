import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { type PhoneInputPropsModel } from '@lib/frontend/user/components/PhoneInput/PhoneInput.models';

export const props: LibraryPropsModel<PhoneInputPropsModel> = {
  Component: PhoneInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
