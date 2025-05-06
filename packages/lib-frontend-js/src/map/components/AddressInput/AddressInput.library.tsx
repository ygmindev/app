import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { type AddressInputPropsModel } from '@lib/frontend/map/components/AddressInput/AddressInput.models';

export const props: LibraryPropsModel<AddressInputPropsModel> = {
  Component: AddressInput,
  defaultProps: {},
  variants: [],
};
