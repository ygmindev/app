import { PhoneField } from '@lib-frontend/user/components/PhoneField/PhoneField';
import { type PhoneFieldPropsModel } from '@lib-frontend/user/components/PhoneField/PhoneField.models';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PhoneFieldPropsModel> = {
  Component: PhoneField,
  defaultProps: {},
  variants: [],
};
