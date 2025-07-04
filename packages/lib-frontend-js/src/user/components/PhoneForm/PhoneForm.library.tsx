import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { PhoneForm } from '@lib/frontend/user/components/PhoneForm/PhoneForm';
import { type PhoneFormPropsModel } from '@lib/frontend/user/components/PhoneForm/PhoneForm.models';

export const props: LibraryPropsModel<PhoneFormPropsModel> = {
  Component: PhoneForm,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
