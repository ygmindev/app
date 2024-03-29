import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { type PhoneInputPropsModel } from '@lib/frontend/user/components/PhoneInput/PhoneInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PhoneInputPropsModel> = {
  Component: PhoneInput,
  defaultProps: {},
  variants: [],
};
