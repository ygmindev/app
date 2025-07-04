import { LIBRARY_CATEGORY_FORM } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { type AddressInputPropsModel } from '@lib/frontend/map/components/AddressInput/AddressInput.models';

export const props: LibraryPropsModel<AddressInputPropsModel> = {
  Component: AddressInput,
  category: LIBRARY_CATEGORY_FORM,
  defaultProps: {},
  variants: [],
};
